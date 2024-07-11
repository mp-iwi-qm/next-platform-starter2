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

<div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
  <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
    <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
      <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
        都道府県を選択してください。
      </div>
      <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        都道府県
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
      <div className="flex justify-center items-center gap-2.5 rounded-full">
        <div className="flex justify-center items-center gap-2.5 p-2">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#49454F" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
  <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
    <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
      <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
        市区郡以下を入力してください。
      </div>
      <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        例）千代田区１－１－１
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
      <div className="flex justify-center items-center gap-2.5 rounded-full">
        <div className="flex justify-center items-center gap-2.5 p-2">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 17.0002L12 13.4002L15.6 17.0002L17 15.6002L13.4 12.0002L17 8.40024L15.6 7.00024L12 10.6002L8.4 7.00024L7 8.40024L10.6 12.0002L7 15.6002L8.4 17.0002ZM12 22.0002C10.6167 22.0002 9.31667 21.7377 8.1 21.2127C6.88333 20.6877 5.825 19.9752 4.925 19.0752C4.025 18.1752 3.3125 17.1169 2.7875 15.9002C2.2625 14.6836 2 13.3836 2 12.0002C2 10.6169 2.2625 9.31691 2.7875 8.10024C3.3125 6.88358 4.025 5.82524 4.925 4.92524C5.825 4.02524 6.88333 3.31274 8.1 2.78774C9.31667 2.26274 10.6167 2.00024 12 2.00024C13.3833 2.00024 14.6833 2.26274 15.9 2.78774C17.1167 3.31274 18.175 4.02524 19.075 4.92524C19.975 5.82524 20.6875 6.88358 21.2125 8.10024C21.7375 9.31691 22 10.6169 22 12.0002C22 13.3836 21.7375 14.6836 21.2125 15.9002C20.6875 17.1169 19.975 18.1752 19.075 19.0752C18.175 19.9752 17.1167 20.6877 15.9 21.2127C14.6833 21.7377 13.3833 22.0002 12 22.0002ZM12 20.0002C14.2333 20.0002 16.125 19.2252 17.675 17.6752C19.225 16.1252 20 14.2336 20 12.0002C20 9.76691 19.225 7.87524 17.675 6.32524C16.125 4.77524 14.2333 4.00024 12 4.00024C9.76667 4.00024 7.875 4.77524 6.325 6.32524C4.775 7.87524 4 9.76691 4 12.0002C4 14.2336 4.775 16.1252 6.325 17.6752C7.875 19.2252 9.76667 20.0002 12 20.0002Z" fill="#49454F" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
  <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
    <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
      <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
        本籍地を選択してください。
      </div>
      <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
        都道府県
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
      <div className="flex justify-center items-center gap-2.5 rounded-full">
        <div className="flex justify-center items-center gap-2.5 p-2">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 17.0005L12 13.4005L15.6 17.0005L17 15.6005L13.4 12.0005L17 8.40049L15.6 7.00049L12 10.6005L8.4 7.00049L7 8.40049L10.6 12.0005L7 15.6005L8.4 17.0005ZM12 22.0005C10.6167 22.0005 9.31667 21.738 8.1 21.213C6.88333 20.688 5.825 19.9755 4.925 19.0755C4.025 18.1755 3.3125 17.1172 2.7875 15.9005C2.2625 14.6838 2 13.3838 2 12.0005C2 10.6172 2.2625 9.31715 2.7875 8.10049C3.3125 6.88382 4.025 5.82549 4.925 4.92549C5.825 4.02549 6.88333 3.31299 8.1 2.78799C9.31667 2.26299 10.6167 2.00049 12 2.00049C13.3833 2.00049 14.6833 2.26299 15.9 2.78799C17.1167 3.31299 18.175 4.02549 19.075 4.92549C19.975 5.82549 20.6875 6.88382 21.2125 8.10049C21.7375 9.31715 22 10.6172 22 12.0005C22 13.3838 21.7375 14.6838 21.2125 15.9005C20.6875 17.1172 19.975 18.1755 19.075 19.0755C18.175 19.9755 17.1167 20.688 15.9 21.213C14.6833 21.738 13.3833 22.0005 12 22.0005ZM12 20.0005C14.2333 20.0005 16.125 19.2255 17.675 17.6755C19.225 16.1255 20 14.2338 20 12.0005C20 9.76715 19.225 7.87549 17.675 6.32549C16.125 4.77549 14.2333 4.00049 12 4.00049C9.76667 4.00049 7.875 4.77549 6.325 6.32549C4.775 7.87549 4 9.76715 4 12.0005C4 14.2338 4.775 16.1255 6.325 17.6755C7.875 19.2255 9.76667 20.0005 12 20.0005Z" fill="#49454F" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col items-start self-stretch py-0 px-3 rounded-tl rounded-tr">
  <div className="flex flex-col items-start gap-2.5 self-stretch h-14 rounded-tl rounded-tr bg-[#e6e0e9]">
    <div className="state-layer flex items-start self-stretch pl-[var(--sds-size-space-400)] py-1 pl-4 pr-0 rounded-tl rounded-tr">
      <div className="content flex flex-col justify-center items-start py-1 px-0 h-12">
        <div className="flex items-center label-text-1 Roboto)'] 12px)] 16px)] text-[#49454f] font-['var(--Body-Small-Font, text-[var(--Body-Small-Size, leading-[var(--Body-Small-Line-Height,">
          電話番号を入力してください。
        </div>
        <div className="flex items-center input-text-1 Roboto)'] 16px)] 24px)] text-[#79747e] font-['var(--Body-Large-Font, text-[var(--Body-Large-Size, leading-[var(--Body-Large-Line-Height,">
          例）02012345678
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5 w-12 h-12">
        <div className="flex justify-center items-center gap-2.5 rounded-full">
          <div className="flex justify-center items-center gap-2.5 p-2">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.4 17.0005L12 13.4005L15.6 17.0005L17 15.6005L13.4 12.0005L17 8.40049L15.6 7.00049L12 10.6005L8.4 7.00049L7 8.40049L10.6 12.0005L7 15.6005L8.4 17.0005ZM12 22.0005C10.6167 22.0005 9.31667 21.738 8.1 21.213C6.88333 20.688 5.825 19.9755 4.925 19.0755C4.025 18.1755 3.3125 17.1172 2.7875 15.9005C2.2625 14.6838 2 13.3838 2 12.0005C2 10.6172 2.2625 9.31715 2.7875 8.10049C3.3125 6.88382 4.025 5.82549 4.925 4.92549C5.825 4.02549 6.88333 3.31299 8.1 2.78799C9.31667 2.26299 10.6167 2.00049 12 2.00049C13.3833 2.00049 14.6833 2.26299 15.9 2.78799C17.1167 3.31299 18.175 4.02549 19.075 4.92549C19.975 5.82549 20.6875 6.88382 21.2125 8.10049C21.7375 9.31715 22 10.6172 22 12.0005C22 13.3838 21.7375 14.6838 21.2125 15.9005C20.6875 17.1172 19.975 18.1755 19.075 19.0755C18.175 19.9755 17.1167 20.688 15.9 21.213C14.6833 21.738 13.3833 22.0005 12 22.0005ZM12 20.0005C14.2333 20.0005 16.125 19.2255 17.675 17.6755C19.225 16.1255 20 14.2338 20 12.0005C20 9.76715 19.225 7.87549 17.675 6.32549C16.125 4.77549 14.2333 4.00049 12 4.00049C9.76667 4.00049 7.875 4.77549 6.325 6.32549C4.775 7.87549 4 9.76715 4 12.0005C4 14.2338 4.775 16.1255 6.325 17.6755C7.875 19.2255 9.76667 20.0005 12 20.0005Z" fill="#49454F" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[388px] h-px bg-[#49454f]" />
</div>
<div className="flex flex-col items-center self-stretch pl-[var(--sds-size-space-400)] pr-[var(--sds-size-space-400)] pt-16 pb-2 px-4 bg-[#fef7ff] text Roboto)'] 22px)] 28px)] self-stretch text-[#1d1b20] text-center font-['var(--Title-Large-Font, text-[var(--Title-Large-Size, leading-[var(--Title-Large-Line-Height,">
  緊急連絡先
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
