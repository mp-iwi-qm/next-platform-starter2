import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="max-w-[400px] flex flex-col mx-auto gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
            <div className="flex flex-col items-center self-stretch pl-[var(--sds-size-space-400)] pr-[var(--sds-size-space-400)] py-2 px-4 bg-[#fef7ff] text Roboto)'] 22px)] 28px)] self-stretch text-[#1d1b20] text-center font-['var(--Title-Large-Font, text-[var(--Title-Large-Size, leading-[var(--Title-Large-Line-Height,">
  基本情報
</div>
<div className="flex items-start self-stretch pl-[var(--sds-size-space-400)] pr-[var(--sds-size-space-400)] py-2 px-4 bg-[#fef7ff]">
  <div className="segmented_button flex justify-center items-center h-12">
    <div className="segment-start flex justify-center items-center py-1 px-0 h-12">
      <div className="container flex flex-col justify-center items-center self-stretch rounded-tl-full rounded-bl-full border border-[#79747e] bg-[#e8def8]">
        <div className="state-layer flex justify-center items-center gap-2 self-stretch py-2 px-3">
          <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.91251 13.5L3.63751 9.22495L4.70626 8.1562L7.91251 11.3625L14.7938 4.4812L15.8625 5.54995L7.91251 13.5Z" fill="#1D192B" />
          </svg>
          <div className="label-text Roboto)'] 14px)] 20px)] text-[#1d192b] text-center font-['var(--Label-Large-Font, text-[var(--Label-Large-Size, font-medium leading-[var(--Label-Large-Line-Height,">女性</div>
        </div>
      </div>
    </div>
    <div className="segment-end flex justify-center items-center py-1 px-0 h-12">
      <div className="container-1 flex flex-col justify-center items-center gap-2.5 self-stretch rounded-tr-full rounded-br-full border border-[#79747e]">
        <div className="state-layer-1 flex justify-center items-center gap-2 self-stretch py-2 px-3 label-text-1 Roboto)'] 14px)] 20px)] text-[#1d1b20] text-center font-['var(--Label-Large-Font, text-[var(--Label-Large-Size, font-medium leading-[var(--Label-Large-Line-Height,">
          男性
        </div>
      </div>
    </div>
  </div>
</div>
            </section>            
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
