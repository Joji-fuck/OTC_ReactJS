
const BOT_AGENTS = [
    'googlebot',
    'yahoo! slurp',
    'bingbot',
    'yandex',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest/0.',
    'developers.google.com/+/web/snippet',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'google-read-aloud',
    'google-inspectiontool',
];

const IGNORE_EXTENSIONS = [
    '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
    '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar',
    '.exe', '.wmv', '.doc', '.avi', '.ppt', '.mpg', '.mpeg', '.tif',
    '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf',
    '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.ttf', '.woff',
    '.svg', '.woff2', '.eot'
];

export async function middleware(request) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const url = request.nextUrl.clone();

    if (
        BOT_AGENTS.some(agent => userAgent.includes(agent)) &&
        !IGNORE_EXTENSIONS.some(ext => url.pathname.includes(ext))
    ) {
        try {
            const prerenderUrl = `https://service.prerender.io/${request.url}`;

            const response = await fetch(prerenderUrl, {
                headers: {
                    'X-Prerender-Token': process.env.PRERENDER_TOKEN,
                },
            });


            if (!response.ok) {
                console.error(`Prerender.io failed with status: ${response.status}`);
                return;
            }


            return new Response(await response.text(), {
                status: response.status,
                headers: { 'Content-Type': 'text/html; charset=utf-8' },
            });

        } catch (error) {
            console.error('Error with Prerender.io middleware:', error);
        }
    }

}