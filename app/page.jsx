"use client"

import { useState } from "react"; 

export default function Page() {
    const [startPage, setStartPage] = useState(true)
    return (
      <body className="font-sans w-full justify-center items-start bg-[#FEF7FF] text-base font-normal text-gray-700 dark:text-gray-200 bg-surface-100 dark:bg-surfacedark-100">
        <div className="max-w-[400px] flex flex-col mx-auto px-4">
          {startPage ? <>
            <div className="flex flex-col h-[100dvh] w-full justify-center items-center">
              <h2 className="mb-6 text-center font-bold">本日はご来店ありがとうございます<br />該当する面接種別の選択をお願いします</h2>
              <div className="flex w-full mx-auto justify-center items-center mb-8">
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] text-center rounded-xl bg-[#FDECFF] dark:bg-surfacedark-100 flex shadow-lg dark:shadow-gray-50/10 items-center justify-center mr-8">
                  <p>キャスト</p>
                </div>
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] text-center rounded-xl bg-[#FDECFF] dark:bg-surfacedark-100 flex shadow-lg dark:shadow-gray-50/10 items-center justify-center">
                  <p>ヘルプ<br />キャスト</p>
                </div>
              </div>
              <div className="flex w-full mx-auto justify-center items-center">
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] text-center rounded-xl bg-[#ECEDFF] dark:bg-surfacedark-100 flex shadow-lg dark:shadow-gray-50/10 items-center justify-center mr-8">
                  <p>正社員<br />スタッフ</p>
                </div>
                <div onClick={()=>setStartPage(false)} className="w-[100px] h-[100px] text-center rounded-xl bg-[#ECEDFF] dark:bg-surfacedark-100 flex shadow-lg dark:shadow-gray-50/10 items-center justify-center">
                  <p>アルバイト<br />スタッフ</p>
                </div>
              </div>
            </div>
          </> : <>
          <div className="w-full pt-12 pb-2 font-bold text-lg text-center flex flex-col justify-center items-center">
            <p className="font-lg text-center w-full mb-2">エントリーシート</p>
            <span className="text-xs w-full">下記内容に沿ってご入力をお願いします</span>
          </div>
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
              <input type="date" aria-label="inputtext" name="inputtext" id="inputs2" className="min-w-full w-full min-h-14 h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="inputs2" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">生年月日を選択してください。</label>
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
              <input type="text" aria-label="inputtext" name="inputtext" id="input10" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input10" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">続柄を選択してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input9" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input9" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">氏名を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input7" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input7" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">都道府県を選択してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input8" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input8" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">市区群以下を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input99" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input99" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">電話番号を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            職歴
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">エリアを入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input12" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input12" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">店名を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input13" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input13" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">キャスト名を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input14" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input14" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">時給を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input15" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input15" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">週の勤務日数を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input151" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input151" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">月間売上を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input161" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input161" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">一日の平均客数を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="tel" aria-label="inputtext" name="inputtext" id="input16" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input16" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">在籍期間を入力してください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <button className="mb-3 btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
            <span className="material-symbols-outlined">+</span>職歴を追加する
          </button>
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            アンケート
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input21" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input21" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">広報活動の可否を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div> 
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <textarea aria-label="inputtext" name="inputtext" id="input22" className="w-full h-[200px] pt-8 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input22" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">志望動機を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <textarea aria-label="inputtext" name="inputtext" id="input23" className="w-full h-[200px] pt-8 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input23" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">前店の退職、退店の理由を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input24" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input24" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">このお仕事は本業か副業か教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input25" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input25" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">この業種以外で活動していることを教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]">※学生など</div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input26" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input26" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">連絡を取っているお客様が何人いるか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>  
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input27" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input27" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">その内何人が来てくれそうか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>  
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input28" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input28" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">以前のお店でバースデー経験があるか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input29" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input29" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">バースデー経験がある場合、指名本数を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input30" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input30" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">バースデー経験がある場合、売上を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input31" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input31" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">以前のお店での一日当たりの平均指名本数を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input32" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer text-right" placeholder=" " />
              <label for="input32" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">以前のお店での月間売上教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input33" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input33" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">お酒の強さを教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input34" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input34" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">お客様との連絡頻度を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input35" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input35" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">同伴は得意か教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input36" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input36" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">アフターに行けるか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input37" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input37" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">彼氏がいるか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input38" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input38" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">彼氏がこの仕事に理解があるか教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <textarea aria-label="inputtext" name="inputtext" id="input40" className="w-full h-[200px] pt-8 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input40" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">話すことのできる日本語以外の言語を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <input type="text" aria-label="inputtext" name="inputtext" id="input41" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input41" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">当店以外に興味のある店舗を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div>
          <div className="flex flex-col mb-3">
            <div className="relative z-0">
              <textarea aria-label="inputtext" name="inputtext" id="input42" className="w-full h-[200px] pt-8 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " />
              <label for="input42" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">当店以外で示された条件を教えてください。</label>
            </div>
            <div className="pt-1 px-4 text-xs tracking-[0.4px] h-[20px]"></div>
          </div> 
          <div className="w-full pt-12 pb-8 flex justify-center items-center">
            本人確認書類
          </div>
          <div className="mb-12 w-full rounded-md bg-gray-100 h-[60px] dark:bg-gray-700 flex  items-center justify-center">
            <p>本人確認ファイルの撮影またはアップロード</p>
          </div>
          <button className="mb-12 btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
            <span className="material-symbols-outlined">✓</span>登録する
          </button>
          </>}
        </div>
      </body>
    );
}