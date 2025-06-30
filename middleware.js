// middleware.js с логами для отладки

const BOT_AGENTS = [ 'googlebot', 'bingbot', 'yandex', 'baiduspider', 'facebookexternalhit', 'twitterbot', 'slackbot', 'discordbot', 'google-inspectiontool' ];
const IGNORE_EXTENSIONS = [ '.js', '.css', '.xml', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.pdf', '.zip' ];

export async function middleware(request) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const url = request.nextUrl.clone();

    console.log(`[Middleware] Request received for: ${url.pathname}`);
    console.log(`[Middleware] User-Agent: ${userAgent}`);

    const isBot = BOT_AGENTS.some(agent => userAgent.includes(agent));
    const isStaticFile = IGNORE_EXTENSIONS.some(ext => url.pathname.includes(ext));

    if (isBot && !isStaticFile) {
        console.log(`[Middleware] Bot detected! Prerendering for: ${request.url}`);

        const prerenderToken = process.env.PRERENDER_TOKEN;
        if (!prerenderToken) {
            console.error('[Middleware] CRITICAL: PRERENDER_TOKEN is not set!');
            return; // Просто выходим, если токена нет
        }

        try {
            const prerenderUrl = `https://service.prerender.io/${request.url}`;
            console.log(`[Middleware] Fetching from Prerender URL: ${prerenderUrl}`);

            const response = await fetch(prerenderUrl, {
                headers: { 'X-Prerender-Token': prerenderToken },
            });

            console.log(`[Middleware] Prerender.io response status: ${response.status}`);

            if (!response.ok) {
                console.error(`[Middleware] Prerender.io failed: ${response.statusText}`);
                return; // Пропускаем, если Prerender не справился
            }

            const body = await response.text();
            console.log(`[Middleware] Prerender.io response body length: ${body.length}`);

            return new Response(body, {
                status: response.status,
                headers: { 'Content-Type': 'text/html; charset=utf-8' },
            });

        } catch (error) {
            console.error('[Middleware] Error during prerender fetch:', error);
        }
    }

    console.log(`[Middleware] Not a bot or static file. Passing through.`);
}