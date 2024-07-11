"use client"

import { useState } from "react"; 

export default function Page() {
    const [startPage, setStartPage] = useState(true)
    return (
      <body className="font-sans w-full justify-center items-start bg-[#FEF7FF] text-base font-normal text-gray-700 dark:text-gray-200 bg-surface-100 dark:bg-surfacedark-100">
        <div className="max-w-[400px] flex flex-col mx-auto px-4">
          {startPage ? <>
            <div className="flex flex-col h-[100dvh] w-full justify-center items-center">
              <h2 className="mb-3">面接にお越しいただきありがとうございます。</h2>
              <div className="flex w-full">
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-8">
                  <p>スタッフ</p>
                </div>
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <p>キャスト</p>
                </div>
              </div>
            </div>
          </> : <>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            基本情報
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input1" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input1" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">氏名を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input2" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input2" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">氏名（カナ）を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input3" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input3" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">都道府県を選択してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input4" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input4" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">市区群以下を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input5" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input5" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">本籍地を選択してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input6" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input6" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">電話番号を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            緊急連絡先
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            アンケート
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            本人確認
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
          </div>
          </>}
        </div>
      </body>
    );
}