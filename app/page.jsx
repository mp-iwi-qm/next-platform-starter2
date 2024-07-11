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
<div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
  <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
    <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
      <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
        氏名を入力してください。
      </div>
      <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        性
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
      <div className="flex justify-center items-end gap-2.5 rounded-full">
        <div className="flex justify-center items-end gap-2.5 p-2">
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
  <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
    <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
      <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
        氏名（カナ）を入力してください。
      </div>
      <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        セイ
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
      <div className="flex justify-center items-end gap-2.5 rounded-full">
        <div className="flex justify-center items-end gap-2.5 p-2">
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-8 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
      2
    </div>
      <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
      <div className="week_day__day Roboto)'] 32px)] 40px)] self-stretch h-10 text-[#1d1b20] font-['var(--Headline-Large-Font, text-[var(--Headline-Large-Size, leading-[var(--Headline-Large-Line-Height,">2023/07/17</div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
    </div>
  </div>
  <div className="flex justify-between items-center self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-3">
    <div className="flex flex-col items-start gap-2.5">
      <div className="flex justify-center items-center gap-2 py-2 pl-2 pr-1 rounded-full">
        <div className="label-text Roboto)'] 14px)] 20px)] text-[#49454f] text-center font-['var(--Label-Large-Font, text-[var(--Label-Large-Size, font-medium leading-[var(--Label-Large-Line-Height,">2023年 7月</div>
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.25L5.25 7.5H12.75L9 11.25Z" fill="#49454F" />
        </svg>
      </div>
    </div>
    <div className="flex items-start">
      <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
        <div className="flex justify-center items-center gap-2.5 rounded-full">
          <div className="flex justify-center items-center gap-2.5 p-2">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#49454F" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
        <div className="flex justify-center items-center gap-2.5 rounded-full">
          <div className="flex justify-center items-center gap-2.5 p-2">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#49454F" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center self-stretch py-0 px-3">
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday flex justify-center items-center gap-2.5 self-stretch date Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        日
      </div>
      <div className="monday flex justify-center items-center gap-2.5 self-stretch date-1 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        月
      </div>
      <div className="tuesday flex justify-center items-center gap-2.5 self-stretch date-2 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        火
      </div>
      <div className="wednesday flex justify-center items-center gap-2.5 self-stretch date-3 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        水
      </div>
      <div className="thursday flex justify-center items-center gap-2.5 self-stretch date-4 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        木
      </div>
      <div className="friday flex justify-center items-center gap-2.5 self-stretch date-5 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        金
      </div>
      <div className="saturday flex justify-center items-center gap-2.5 self-stretch date-6 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        土
      </div>
    </div>
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday-1 flex justify-center items-center gap-2 self-stretch p-1">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-2.5 p-2 w-10 h-10">
            <div className="flex-shrink-0 w-[1.375rem] h-[var(--sds-size-icon-small)]" />
          </div>
        </div>
      </div>
      <div className="monday-1 flex justify-center items-center gap-2 self-stretch p-1">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-2.5 p-2 w-10 h-10">
            <div className="flex-shrink-0 w-[1.375rem] h-[var(--sds-size-icon-small)]" />
          </div>
        </div>
      </div>
      <div className="tuesday-1 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-7 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            1
          </div>
        </div>
      </div>
      <div className="wednesday-1 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-8 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            2
          </div>
        </div>
      </div>
      <div className="thursday-1 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-9 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            3
          </div>
        </div>
      </div>
      <div className="friday-1 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-10 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            4
          </div>
        </div>
      </div>
      <div className="saturday-1 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full border border-[#65558f]">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-2.5 p-2 w-10 h-10 date-11 Roboto)'] 16px)] 24px)] text-[#65558f] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            5
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-12 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            6
          </div>
        </div>
      </div>
      <div className="monday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-13 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            7
          </div>
        </div>
      </div>
      <div className="tuesday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-14 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            8
          </div>
        </div>
      </div>
      <div className="wednesday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-15 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            9
          </div>
        </div>
      </div>
      <div className="thursday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-16 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            10
          </div>
        </div>
      </div>
      <div className="friday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-17 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            11
          </div>
        </div>
      </div>
      <div className="saturday-2 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-18 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            12
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-19 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            13
          </div>
        </div>
      </div>
      <div className="monday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-20 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            14
          </div>
        </div>
      </div>
      <div className="tuesday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-21 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            15
          </div>
        </div>
      </div>
      <div className="wednesday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-22 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            16
          </div>
        </div>
      </div>
      <div className="thursday-3 flex flex-col justify-center items-center gap-2.5 self-stretch">
        <div className="flex items-start gap-2.5 w-10 h-10 rounded-full bg-[#65558f]">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-23 Roboto)'] 14px)] 20px)] text-white text-center font-['var(--Label-Large-Font, text-[var(--Label-Large-Size, font-medium leading-[var(--Label-Large-Line-Height,">
            17
          </div>
        </div>
      </div>
      <div className="friday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-24 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            18
          </div>
        </div>
      </div>
      <div className="saturday-3 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-25 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            19
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-26 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            20
          </div>
        </div>
      </div>
      <div className="monday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-27 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            21
          </div>
        </div>
      </div>
      <div className="tuesday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-28 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            22
          </div>
        </div>
      </div>
      <div className="wednesday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-29 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            23
          </div>
        </div>
      </div>
      <div className="thursday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-30 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            24
          </div>
        </div>
      </div>
      <div className="friday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-31 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            25
          </div>
        </div>
      </div>
      <div className="saturday-4 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-32 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            26
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-start self-stretch h-12">
      <div className="sunday-5 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-33 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            27
          </div>
        </div>
      </div>
      <div className="monday-5 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-34 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            28
          </div>
        </div>
      </div>
      <div className="tuesday-5 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-35 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            29
          </div>
        </div>
      </div>
      <div className="wednesday-5 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-36 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            30
          </div>
        </div>
      </div>
      <div className="thursday-5 flex justify-center items-center gap-2.5 self-stretch">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10 rounded-full">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 w-10 h-10 date-37 Roboto)'] 16px)] 24px)] text-[#1d1b20] text-center font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
            31
          </div>
        </div>
      </div>
      <div className="friday-5 flex justify-center items-center gap-2 self-stretch p-1">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-2.5 p-2 w-10 h-10">
            <div className="flex-shrink-0 w-[1.375rem] h-[var(--sds-size-icon-small)]" />
          </div>
        </div>
      </div>
      <div className="saturday-5 flex justify-center items-center gap-2 self-stretch p-1">
        <div className="flex justify-center items-center gap-2.5 w-10 h-10">
          <div className="flex flex-shrink-0 justify-center items-center gap-2.5 p-2.5 p-2 w-10 h-10">
            <div className="flex-shrink-0 w-[1.375rem] h-[var(--sds-size-icon-small)]" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-shrink-0 justify-between items-start self-stretch pt-2 pb-3 px-3 h-[3.75rem]">
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
