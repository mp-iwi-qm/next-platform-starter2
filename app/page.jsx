export default function Page() {
    return (
      <body className="font-sans text-base font-normal text-gray-700 dark:text-gray-200 bg-surface-100 dark:bg-surfacedark-100">
      <div className="preloader loaded-success fixed inset-0 z-50 bg-neutral-10 dark:bg-neutral-900">
        <div className="w-full h-screen flex justify-center items-center">
          <svg className="circular-loader relative w-[100px] h-[100px]">
            <circle className="path stroke-primary-600 dark:stroke-primary-200" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
          </svg>
        </div>
      </div>
    
      <header>
        <div className="w-full h-16 fixed md:relative top-0 left-0 right-0 bg-surface-200 dark:bg-surfacedark-200 md:bg-transparent md:dark:bg-transparent flex flex-row items-center justify-between md:justify-center gap-1.5 z-50">
          <a href="https://aribudin.github.io/tailmater/" target="_blank" className="md:hidden relative px-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" version="1.0" viewBox="0 0 317.000000 319.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,319.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path className="fill-primary-200 dark:fill-primary-600" d="M285 3092 c-70 -34 -112 -72 -151 -139 -26 -43 -28 -57 -29 -143 0 -86 3 -100 28 -144 16 -27 45 -70 66 -95 46 -55 56 -75 64 -121 10 -54 -7 -107 -51 -158 -21 -26 -54 -74 -73 -107 -32 -56 -34 -66 -34 -150 0 -83 2 -94 33 -149 18 -33 50 -79 72 -103 74 -84 73 -187 -4 -278 -23 -27 -55 -72 -72 -100 -26 -45 -29 -58 -29 -140 0 -80 3 -96 29 -144 15 -30 50 -81 76 -114 78 -96 75 -172 -10 -282 -83 -107 -95 -137 -95 -240 0 -86 2 -93 35 -150 40 -68 114 -130 174 -146 125 -34 231 -6 345 93 85 74 179 76 268 5 83 -64 121 -87 172 -103 115 -35 220 -3 351 107 84 70 176 63 273 -21 32 -27 64 -50 70 -50 6 0 18 -6 26 -13 9 -8 35 -19 57 -25 151 -43 307 34 376 186 20 44 26 141 12 198 -10 44 -62 133 -105 182 -66 75 -65 174 1 252 94 113 123 197 108 311 -8 63 -50 143 -103 199 -79 82 -75 190 10 287 25 28 45 56 45 61 0 5 9 20 19 33 24 32 39 129 29 197 -11 73 -88 202 -121 202 -5 0 -21 8 -35 18 -71 49 -215 52 -297 5 -80 -44 -90 -54 -126 -118 -31 -57 -33 -65 -34 -160 0 -113 12 -145 92 -240 48 -58 63 -92 63 -139 0 -63 -13 -97 -55 -144 -23 -26 -55 -71 -71 -101 -26 -49 -29 -63 -29 -150 0 -110 13 -142 96 -245 53 -66 65 -107 54 -187 -6 -44 -14 -57 -70 -112 -71 -72 -120 -92 -195 -82 -36 5 -59 17 -98 51 -29 25 -78 60 -109 77 -53 28 -66 31 -148 32 -84 0 -94 -2 -150 -34 -33 -19 -81 -54 -108 -77 -36 -33 -58 -44 -96 -49 -79 -11 -124 8 -196 80 -54 54 -65 70 -70 110 -13 80 0 118 70 212 73 100 90 150 83 252 -6 80 -41 155 -103 222 -75 81 -74 181 2 275 86 105 98 136 98 249 0 98 -1 101 -38 163 -21 35 -51 78 -66 95 -41 47 -51 71 -51 119 0 67 15 105 64 159 73 82 91 128 91 239 0 86 -3 100 -28 145 -39 67 -61 90 -126 127 -47 26 -69 32 -136 35 -72 4 -86 1 -140 -25z"/>
                <path className="fill-primary-600 dark:fill-primary-200" d="M1098 3105 c-88 -24 -187 -128 -209 -219 -19 -77 -7 -168 30 -227 17 -28 31 -54 31 -58 0 -4 14 -20 31 -37 41 -38 59 -82 59 -143 0 -66 -12 -94 -65 -153 -25 -28 -45 -55 -45 -60 0 -5 -10 -24 -22 -41 -20 -28 -23 -44 -23 -127 0 -85 3 -100 27 -145 15 -27 49 -76 75 -108 43 -54 47 -64 51 -122 5 -72 -15 -124 -68 -180 -15 -16 -41 -52 -57 -80 -25 -45 -28 -60 -28 -140 0 -80 3 -96 29 -145 28 -55 72 -110 88 -110 5 0 21 -8 35 -17 68 -45 159 -55 241 -27 147 48 233 189 210 341 -9 55 -47 142 -73 163 -40 33 -78 106 -83 156 -6 67 9 108 59 169 61 73 87 124 96 185 17 111 -13 202 -103 304 -48 55 -61 103 -50 179 11 75 124 186 204 201 56 10 121 -11 176 -58 28 -23 74 -55 101 -72 46 -27 58 -29 145 -29 108 0 142 13 225 85 65 57 96 70 160 70 75 0 110 -17 172 -82 92 -99 98 -199 15 -293 -47 -53 -97 -147 -106 -197 -9 -51 10 -160 36 -205 12 -21 41 -62 66 -91 52 -62 66 -107 57 -178 -5 -44 -14 -61 -56 -109 -75 -86 -104 -154 -104 -245 0 -90 28 -156 105 -249 42 -49 51 -67 56 -113 8 -65 -14 -123 -68 -184 -86 -97 -114 -201 -83 -307 47 -163 192 -254 357 -225 168 29 271 178 247 356 -9 68 -32 111 -100 194 -87 105 -78 194 32 324 44 53 69 116 72 185 5 101 -26 176 -118 285 -39 45 -40 50 -40 119 0 70 1 73 45 129 25 31 50 65 55 74 6 9 18 28 27 42 17 26 37 125 33 170 -4 46 -24 105 -50 142 -14 20 -25 40 -25 43 0 4 -18 27 -39 51 -65 74 -67 170 -6 247 101 126 131 211 113 323 -15 100 -75 176 -174 225 -40 20 -64 24 -134 24 -95 -1 -129 -15 -245 -104 -32 -24 -76 -48 -97 -53 -74 -16 -110 -2 -245 99 -132 98 -284 80 -437 -53 -81 -70 -182 -71 -260 -3 -24 22 -47 39 -51 39 -3 0 -21 11 -39 25 -65 49 -168 65 -258 40z"/>
              </g>
            </svg>
          </a>
          <h2 className="text-[1.375rem] leading-7">Components</h2>
          <div className="md:hidden relative px-4" aria-label="Brightness" data-microtip-position="bottom" role="tooltip" >
            <button data-type="theme" id="lightdark" className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
              <span className="material-symbols-outlined dark-hidden">light_mode</span>
              <span className="material-symbols-outlined dark-block">dark_mode</span>
            </button>
          </div>
        </div>
      </header>
    
      <main className="flex flex-row gap-4 md:pl-24 px-2 md:pr-0 pt-20 md:pt-0">
        <div className="w-full md:w-24 fixed left-0 md:top-0 bottom-0 right-0 md:h-screen flex items-center flex-row md:flex-col gap-8 py-4 bg-surface-200 dark:bg-surfacedark-200 z-50">
          <a href="https://aribudin.github.io/tailmater/" target="_blank" className="hidden md:flex relative mb-8">
            <div aria-label="Tailmater - Tailwind Material 3 UI" data-microtip-position="right" role="tooltip">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" version="1.0" viewBox="0 0 317.000000 319.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,319.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                  <path className="fill-primary-200 dark:fill-primary-600" d="M285 3092 c-70 -34 -112 -72 -151 -139 -26 -43 -28 -57 -29 -143 0 -86 3 -100 28 -144 16 -27 45 -70 66 -95 46 -55 56 -75 64 -121 10 -54 -7 -107 -51 -158 -21 -26 -54 -74 -73 -107 -32 -56 -34 -66 -34 -150 0 -83 2 -94 33 -149 18 -33 50 -79 72 -103 74 -84 73 -187 -4 -278 -23 -27 -55 -72 -72 -100 -26 -45 -29 -58 -29 -140 0 -80 3 -96 29 -144 15 -30 50 -81 76 -114 78 -96 75 -172 -10 -282 -83 -107 -95 -137 -95 -240 0 -86 2 -93 35 -150 40 -68 114 -130 174 -146 125 -34 231 -6 345 93 85 74 179 76 268 5 83 -64 121 -87 172 -103 115 -35 220 -3 351 107 84 70 176 63 273 -21 32 -27 64 -50 70 -50 6 0 18 -6 26 -13 9 -8 35 -19 57 -25 151 -43 307 34 376 186 20 44 26 141 12 198 -10 44 -62 133 -105 182 -66 75 -65 174 1 252 94 113 123 197 108 311 -8 63 -50 143 -103 199 -79 82 -75 190 10 287 25 28 45 56 45 61 0 5 9 20 19 33 24 32 39 129 29 197 -11 73 -88 202 -121 202 -5 0 -21 8 -35 18 -71 49 -215 52 -297 5 -80 -44 -90 -54 -126 -118 -31 -57 -33 -65 -34 -160 0 -113 12 -145 92 -240 48 -58 63 -92 63 -139 0 -63 -13 -97 -55 -144 -23 -26 -55 -71 -71 -101 -26 -49 -29 -63 -29 -150 0 -110 13 -142 96 -245 53 -66 65 -107 54 -187 -6 -44 -14 -57 -70 -112 -71 -72 -120 -92 -195 -82 -36 5 -59 17 -98 51 -29 25 -78 60 -109 77 -53 28 -66 31 -148 32 -84 0 -94 -2 -150 -34 -33 -19 -81 -54 -108 -77 -36 -33 -58 -44 -96 -49 -79 -11 -124 8 -196 80 -54 54 -65 70 -70 110 -13 80 0 118 70 212 73 100 90 150 83 252 -6 80 -41 155 -103 222 -75 81 -74 181 2 275 86 105 98 136 98 249 0 98 -1 101 -38 163 -21 35 -51 78 -66 95 -41 47 -51 71 -51 119 0 67 15 105 64 159 73 82 91 128 91 239 0 86 -3 100 -28 145 -39 67 -61 90 -126 127 -47 26 -69 32 -136 35 -72 4 -86 1 -140 -25z"/>
                  <path className="fill-primary-600 dark:fill-primary-200" d="M1098 3105 c-88 -24 -187 -128 -209 -219 -19 -77 -7 -168 30 -227 17 -28 31 -54 31 -58 0 -4 14 -20 31 -37 41 -38 59 -82 59 -143 0 -66 -12 -94 -65 -153 -25 -28 -45 -55 -45 -60 0 -5 -10 -24 -22 -41 -20 -28 -23 -44 -23 -127 0 -85 3 -100 27 -145 15 -27 49 -76 75 -108 43 -54 47 -64 51 -122 5 -72 -15 -124 -68 -180 -15 -16 -41 -52 -57 -80 -25 -45 -28 -60 -28 -140 0 -80 3 -96 29 -145 28 -55 72 -110 88 -110 5 0 21 -8 35 -17 68 -45 159 -55 241 -27 147 48 233 189 210 341 -9 55 -47 142 -73 163 -40 33 -78 106 -83 156 -6 67 9 108 59 169 61 73 87 124 96 185 17 111 -13 202 -103 304 -48 55 -61 103 -50 179 11 75 124 186 204 201 56 10 121 -11 176 -58 28 -23 74 -55 101 -72 46 -27 58 -29 145 -29 108 0 142 13 225 85 65 57 96 70 160 70 75 0 110 -17 172 -82 92 -99 98 -199 15 -293 -47 -53 -97 -147 -106 -197 -9 -51 10 -160 36 -205 12 -21 41 -62 66 -91 52 -62 66 -107 57 -178 -5 -44 -14 -61 -56 -109 -75 -86 -104 -154 -104 -245 0 -90 28 -156 105 -249 42 -49 51 -67 56 -113 8 -65 -14 -123 -68 -184 -86 -97 -114 -201 -83 -307 47 -163 192 -254 357 -225 168 29 271 178 247 356 -9 68 -32 111 -100 194 -87 105 -78 194 32 324 44 53 69 116 72 185 5 101 -26 176 -118 285 -39 45 -40 50 -40 119 0 70 1 73 45 129 25 31 50 65 55 74 6 9 18 28 27 42 17 26 37 125 33 170 -4 46 -24 105 -50 142 -14 20 -25 40 -25 43 0 4 -18 27 -39 51 -65 74 -67 170 -6 247 101 126 131 211 113 323 -15 100 -75 176 -174 225 -40 20 -64 24 -134 24 -95 -1 -129 -15 -245 -104 -32 -24 -76 -48 -97 -53 -74 -16 -110 -2 -245 99 -132 98 -284 80 -437 -53 -81 -70 -182 -71 -260 -3 -24 22 -47 39 -51 39 -3 0 -21 11 -39 25 -65 49 -168 65 -258 40z"/>
                </g>
              </svg>
            </div>
          </a>
    
          <div className="w-full md:w-auto justify-center flex flex-row md:flex-col items-center md:gap-4">
            <a href="index.html" className="group active min-h-[56px] w-1/4 md:w-auto flex flex-col items-center justify-center px-0 gap-1">
              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                <span className="material-symbols-outlined">widgets</span>
              </div>
              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Components</p>
            </a>
    
            <a href="colors.html" className="group min-h-[56px] w-1/4 md:w-auto flex flex-col items-center justify-center px-0 gap-1">
              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                <span className="material-symbols-outlined">format_paint</span>
              </div>
              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Colors</p>
            </a>
    
            <a href="typography.html" className="group min-h-[56px] w-1/4 md:w-auto flex flex-col items-center justify-center px-0 gap-1">
              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                <span className="material-symbols-outlined">format_size</span>
              </div>
              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Typography</p>
            </a>
    
            <a href="elevation.html" className="group min-h-[56px] w-1/4 md:w-auto flex flex-col items-center justify-center px-0 gap-1">
                <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                  <span className="material-symbols-outlined">invert_colors</span>
                </div>
                <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Elevation</p>
              </a>
          </div>
          
          <div className="hidden md:flex flex-col items-center gap-3 mt-auto">
            <div className="relative" aria-label="Brightness" data-microtip-position="top" role="tooltip">
              <button data-type="theme" id="lightdark" className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                <span className="material-symbols-outlined dark-hidden">light_mode</span>
                <span className="material-symbols-outlined dark-block">dark_mode</span>
              </button>
            </div>
          </div>
        </div>
    
        <div className="flex flex-col w-full gap-12 md:gap-2 overflow-hidden">
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Actions</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="flex flex-wrap gap-4 md:gap-12">
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Buttons</p>
                    <div className="flex flex-col gap-2">
                      <div className="py-4 flex-wrap rounded flex gap-2 items-center">
                        <button className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] shadow-lg text-sm tracking-[.00714em] font-medium bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200">
                          Elevated
                        </button>
    
                        <button className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] shadow-lg text-sm tracking-[.00714em] font-medium bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200">
                          <span className="material-symbols-outlined">add</span>
                          Icon
                        </button>
    
                        <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium" disabled="">
                          <span className="material-symbols-outlined">add</span>
                          Disabled
                        </button>
                      </div>
    
                      <div className="py-4 flex-wrap rounded flex gap-2 items-center">
                        <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
                          Filled
                        </button>
    
                        <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
                          <span className="material-symbols-outlined">add</span>
                          Icon
                        </button>
    
                        <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium" disabled="">
                          <span className="material-symbols-outlined">add</span>
                          Disabled
                        </button>
                      </div>
    
                      <div className="py-4 flex-wrap rounded flex gap-2 items-center">
                        <button className="btn-tonal relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
                          Tonal
                        </button>
    
                        <button className="btn-tonal relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
                          <span className="material-symbols-outlined">add</span>
                          Icon
                        </button>
    
                        <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium" disabled="">
                          <span className="material-symbols-outlined">add</span>
                          Disabled
                        </button>
                      </div>
    
                      <div className="py-4 flex-wrap rounded flex gap-2 items-center">
                        <button className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          Outlined
                        </button>
    
                        <button className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <span className="material-symbols-outlined">add</span>
                          Icon
                        </button>
    
                        <button className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-neutral-200 dark:border-neutral-400 dark:text-neutral-400" disabled="">
                          <span className="material-symbols-outlined">add</span>
                          Disabled
                        </button>
                      </div>
    
                      <div className="py-4 flex-wrap rounded flex gap-2 items-center">
                        <button className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
                          Text
                        </button>
    
                        <button className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
                          <span className="material-symbols-outlined">add</span>
                          Icon
                        </button>
    
                        <button className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-neutral-400" disabled="">
                          <span className="material-symbols-outlined">add</span>
                          Disabled
                        </button>
                      </div>
                    </div>
                  </div>
    
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Floating Action buttons (Fabs)</p>
                    <div className="py-4 flex-wrap rounded flex gap-2 items-center mb-6">
                      <button className="fabs relative flex flex-row items-center justify-center w-24 h-24 gap-x-2 p-2 rounded-[28px] overflow-hidden shadow-xl text-sm tracking-[.00714em] font-medium bg-primary-100 dark:bg-primary-700 dark:text-primary-100">
                        <span className="material-symbols-outlined !text-4xl">edit</span>
                      </button>
                      <button className="fabs relative flex flex-row items-center justify-center h-14 gap-x-3 p-4 pr-8 rounded-2xl overflow-hidden shadow-lg text-sm tracking-[.00714em] font-medium bg-primary-100 dark:bg-primary-700 dark:text-primary-100">
                        <span className="material-symbols-outlined">edit</span>
                        Compose
                      </button>
                      <button className="fabs relative flex flex-row items-center justify-center w-14 h-14 gap-x-2 p-2 rounded-2xl overflow-hidden shadow-lg text-sm tracking-[.00714em] font-medium bg-primary-100 dark:bg-primary-700 dark:text-primary-100">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="fabs relative flex flex-row items-center justify-center w-10 h-10 gap-x-2 p-2 rounded-xl overflow-hidden shadow-lg text-sm tracking-[.00714em] font-medium bg-primary-100 dark:bg-primary-700 dark:text-primary-100">
                        <span className="material-symbols-outlined !text-lg">edit</span>
                      </button>
                    </div>
    
                    <p className="text-sm tracking-[0.1px] mb-3">Icon buttons</p>
                    <div className="py-4 flex-wrap rounded flex gap-2 items-center mb-6">
                      <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                        settings
                      </button>
    
                      <button className="material-symbols-outlined btn relative !inline-flex !items-center items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
                        settings
                      </button>
    
                      <button className="material-symbols-outlined btn-tonal relative !inline-flex !items-center items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
                        settings
                      </button>
    
                      <button className="material-symbols-outlined btn-outline relative !inline-flex !items-center items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                        settings
                      </button>
                    </div>
    
                    <p className="text-sm tracking-[0.1px] mb-6">Segmented Buttons (Checkbox & Radio)</p>
                    <div className="flex-wrap rounded flex flex-col gap-6">
                      <div className="btn-segmented inline-flex flex-row items-center">
                        <div className="segmented-item active [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check1" type="checkbox" className="z-10 opacity-0 absolute inset-0" value="1" checked />
                          <label className="flex items-center gap-3" for="check1">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Red
                          </label>
                        </div>
                        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check2" type="checkbox" className="z-10 opacity-0 absolute inset-0" value="1" />
                          <label className="flex items-center gap-3" for="check2">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Green
                          </label>
                        </div>
                        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check3" type="checkbox" className="z-10 opacity-0 absolute inset-0" value="1" />
                          <label className="flex items-center gap-3" for="check3">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Yellow
                          </label>
                        </div>
                      </div>
    
                      <div className="btn-segmented inline-flex flex-row items-center">
                        <div className="segmented-item active [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check4" type="radio" name="radios" className="z-10 opacity-0 absolute inset-0" value="1" checked />
                          <label className="flex items-center gap-3" for="check1">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Small
                          </label>
                        </div>
                        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check5" type="radio" name="radios" className="z-10 opacity-0 absolute inset-0" value="2" />
                          <label className="flex items-center gap-3" for="check2">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Medium
                          </label>
                        </div>
                        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 h-10 btn-outline relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
                          <input id="check6" type="radio" name="radios" className="z-10 opacity-0 absolute inset-0" value="3" />
                          <label className="flex items-center gap-3" for="check3">
                            <span className="material-symbols-outlined check-icon">check</span>
                            Big
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
             <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Communication</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8">
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Badge</p>
                    <div className="flex pt-16 w-full overflow-hidden md:max-w-[412px] bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700 mb-6">
                      <div className="w-full md:max-w-[412px] text-sm flex flex-row space-x-2 items-center justify-center">
                        <div className="flex flex-row justify-center gap-2 w-full md:w-[412px] bg-surface-200 dark:bg-surfacedark-200">
                          <a href="#" className="group flex w-1/3 flex-col items-center justify-center px-0 py-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon active group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">mail</span>
                              <div className="absolute top-0 left-8 min-w-[22px] px-1 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">999+</div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Mail</p>
                          </a>
    
                          <a href="#" className="group flex w-1/3 flex-col items-center justify-center px-0 pt-3 pb-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">chat_bubble</span>
                              <div className="absolute top-0 right-3 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">1</div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Chat</p>
                          </a>
    
                          <a href="#" className="group flex w-1/3 flex-col items-center justify-center px-0 pt-3 pb-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">groups</span>
                              <div className="absolute top-1.5 right-5 w-1.5 h-1.5 rounded-full bg-error-600 dark:bg-error-200"></div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Rooms</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Progress Indicators</p>
                    <div className="w-full md:w-72 p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <div className="relative flex flex-col gap-4 text-center mb-6">
                        <div className="relative">
                          <div className="linear-loader relative overflow-hidden w-full h-1 flex bg-gray-100 dark:bg-gray-700">
                            <div className="bar absolute inset-0 w-full bg-primary-600 dark:bg-primary-200"></div>
                            <div className="bar absolute inset-0 w-full bg-primary-600 dark:bg-primary-200"></div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center justify-center">
                        <svg className="circular-loader relative w-[100px] h-[100px]">
                          <circle className="path stroke-primary-600 dark:stroke-primary-200" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
    
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Snackbar</p>
                    <div className="w-full p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <div className="text-center">
                        <button data-type="snackbar" data-target="#snackbar_a" className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">Show Snackbar</button>
                      </div>
                      <div id="snackbar_a" className="[&.show]:opacity-100 [&.show]:bottom-24 md:[&.show]:bottom-4 fixed left-4 right-4 -bottom-full opacity-0 duration-[400ms] ease-[cubic-bezier(0, 0, 0, 1)] flex flex-row items-center sm:w-80 gap-4 py-3 px-4 shadow-md rounded text-neutral-50 dark:text-neutral-800 bg-neutral-800 dark:bg-neutral-100 z-50">
                        <p className="flex flex-grow text-sm tracking-[0.25px]">Single-line snackbar</p>
                        <button data-close="#snackbar_a" className="flex items-center">
                          <span className="material-symbols-outlined">close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
             <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Containment</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="w-full w-full md:flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8">
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Cards</p>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-full md:w-32 md:w-36 h-36 rounded-xl bg-neutral-10 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <p>Outlined</p>
                      </div>
                      
                      <div className="w-full md:w-32 md:w-36 h-36 rounded-xl bg-surface-100 dark:bg-surfacedark-100 flex shadow-lg dark:shadow-gray-50/10 items-center justify-center">
                      <p>Elevated</p>
                      </div>
    
                      <div className="w-full md:w-32 md:w-36 h-36 rounded-xl bg-gray-100 dark:bg-gray-700 flex  items-center justify-center">
                      <p>Filled</p>
                      </div>
                    </div>
                  </div>
    
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3">Divider</p>
                    <div className="relative w-full md:w-[280px] p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <hr className="w-full border-gray-200 dark:border-gray-700" />
                      <br />
    
                      <div className="flex justify-between items-center">
                        <hr className="w-full border-gray-200 dark:border-gray-700" />
                        <div className="px-2">Center</div>
                        <hr className="w-full border-gray-200 dark:border-gray-700" />
                      </div>
    
                      <div className="mt-6 flex flex-row items-center gap-4 mb-4">
                        <span className="material-symbols-outlined">format_align_left</span>
                        <span className="material-symbols-outlined">format_align_center</span>
                        <span className="material-symbols-outlined">format_align_right</span>
                        <hr className="self-stretch h-auto border-r border-solid border-gray-200 dark:border-gray-700" />
                        <span className="material-symbols-outlined">format_bold</span>
                        <span className="material-symbols-outlined">format_italic</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm tracking-[0.1px] mb-3 mt-3 md:mt-0">Lists</p>
                    <div className="w-full p-4 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <div className="w-full md:w-[360px] flex flex-col py-2 rounded-xl overflow-hidden bg-neutral-10 dark:bg-neutral-900">
                        <div className="min-h-[3.5rem] flex flex-row items-center gap-4 py-2 pl-4 pr-6">
                          <div className="w-14 h-14 flex items-center justify-center title-md font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">
                            <img src="src/img/media2.png" alt="media 2" className="w-14 h-14" />
                          </div>
                          <div className="flex flex-col flex-grow">
                            <p className="tracking-[.03125em]">List Item</p>
                            <span className="text-sm tracking-[0.25px]">Supporting line text</span>
                          </div>
                          <span className="text-[11px] leading-4 tracking-[.045em] font-medium">100+</span>
                        </div>
                        <div className="min-h-[3.5rem] flex flex-row items-center gap-4 py-2 pl-4 pr-6">
                          <div className="w-14 h-14 flex items-center justify-center title-md font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">
                            <img src="src/img/media2.png" alt="media 2" className="w-14 h-14" />
                          </div>
                          <div className="flex flex-col flex-grow">
                            <p className="tracking-[.03125em]">List Item</p>
                            <span className="text-sm tracking-[0.25px]">Supporting line text</span>
                          </div>
                          <span className="text-[11px] leading-4 tracking-[.045em] font-medium">100+</span>
                        </div>
                      </div>
    
                      <div className="w-full md:w-[360px] flex flex-col py-2 rounded-xl overflow-hidden bg-neutral-10 dark:bg-neutral-900">
                        <div className="min-h-[3.5rem] flex flex-row items-center gap-4 py-2 pl-4 pr-6">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full title-md font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">
                            <img src="src/img/avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
                          </div>
                          <p className="flex flex-grow">List Item</p>
                          <input type="checkbox" name="checked-demo" className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" checked="" />
                        </div>
    
                        <div className="min-h-[3.5rem] flex flex-row items-center gap-4 py-2 pl-4 pr-6">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full title-md font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">A</div>
                          <p className="flex flex-grow">List Item</p>
                          <input type="checkbox" name="checked-demo" className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" checked="" />
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm tracking-[0.1px] mb-3 mt-3 md:mt-0">Bottom Sheets</p>
                      <div className="w-full p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <button data-type="sheets" data-target="#sheets_a" className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">Show Bottom Sheets</button>
    <div id="sheets_a" className="group">
      <button data-close="#sheets_a" className="group-[&.show]:top-2 group-[&.show]:opacity-100 fixed z-50 opacity-0 -top-full left-4 btn-tonal flex flex-row items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
        <span className="material-symbols-outlined ml-auto icon-active">close</span>
      </button>
      <div className="group-[&.show]:translate-y-0 bottom-0 fixed left-0 right-0 z-50 transition-transform translate-y-full duration-[400ms] flex flex-col items-center w-full sm:w-5/6 md:w-2/3 gap-4 sm:mx-auto rounded-t-[28px] min-h-[40%] max-h-[60%] bg-surface-100 dark:bg-surfacedark-100 shadow-xl">
        <div className="flex justify-center p-4 w-full h-9">
          <div className="w-8 h-1 opacity-40 bg-gray-500 rounded-full"></div>
        </div>
        <div className="relative px-4 text-center">
           <p>insert content bottom sheets</p>
        </div>
      </div>
    </div>
                        </div>
                      </div>
                    </div>
    
                    <div>
                      <p className="text-sm tracking-[0.1px] mb-3">Side Sheets</p>
                      <div className="w-full p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <button data-type="dialogs" data-target="#sheet_b" className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">Show Side Sheets</button>
    
    <div id="sheet_b" className="group">
      <div data-close="#sheet_b" className="group-[&.show]:opacity-60 dark:group-[&.show]:opacity-60 group-[&.show]:inset-0 fixed z-40 opacity-0 -top-full bg-neutral-900"></div>
      <div className="group-[&.show]:translate-x-0 fixed top-0 bottom-0 right-0 rounded-l-2xl w-3/4 sm:w-[420px] z-50 bg-surface-100 dark:bg-surfacedark-100 transition-transform translate-x-full duration-[400ms] flex flex-col gap-2">
        <div className="min-h-[56px] flex flex-row items-center gap-3 px-6 pt-6">
          <h3 className="flex flex-grow text-base tracking-[.009375em]">Title Side Sheet</h3>
          <button data-close="#sheet_b" className="flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="relative text-left px-6 py-2 overflow-y-scroll scrollbars">
          <p className="text-sm tracking-[.01785em] mb-4">Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.</p>
          <p className="text-sm tracking-[.01785em] mb-4">Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.</p>
          <p className="text-sm tracking-[.01785em] mb-4">Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow.</p>
        </div>
      </div>
    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm tracking-[0.1px] mb-3 mt-3 md:mt-0">Dialogs</p>
                      <div className="w-full p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <button data-type="dialogs" data-target="#dialog_a" className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">Show Dialogs</button>
    <div id="dialog_a" className="[&.show]:opacity-100 [&.show]:h-full [&.show]:inset-0 duration-[400ms] ease-[cubic-bezier(0, 0, 0, 1)] opacity-0 w-full h-0 z-50 overflow-auto fixed left-0 top-0 flex items-center justify-center">
      <div data-close="#dialog_a" className="backDialog hidden z-40 overflow-auto fixed bg-black opacity-50"></div>
      <div className="z-50 flex flex-col w-11/12 sm:w-[480px] h-auto bg-surface-300 dark:bg-surfacedark-300 rounded-[28px]">
        <div className="flex flex-col gap-4 justify-start px-8 pt-8 pb-0">
          <h3 className="text-2xl font-normal text-gray-900 dark:text-gray-100">Basic dialog title</h3>
          <p className="text-sm tracking-[0.25px] leading-5">A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.</p>
        </div>
        <div className="flex flex-row justify-end gap-2 px-8 py-8">
          <button data-close="#dialog_a" className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
            Cancel
          </button>
    
          <button className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
            Save
          </button>
        </div>
      </div>
    </div>
                        </div>
                      </div>
                    </div>
    
                    <div>
                      <p className="text-sm tracking-[0.1px] mb-3">Dialogs Fullscreen</p>
                      <div className="w-full p-10 bg-neutral-10 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <button data-type="dialogs" data-target="#dialog_b" className="btn-tonal relative inline-flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">Dialogs Fullscreen</button>
    <div id="dialog_b" className="[&.show]:opacity-100 [&.show]:h-full [&.show]:inset-0 opacity-0 w-full h-0 z-50 overflow-auto fixed left-0 top-0 flex items-center justify-center">
      <div className="dialog hidden z-50 flex-col gap-2 fixed bg-neutral-10 dark:bg-neutral-900">
        <div className="min-h-[56px] flex flex-row items-center gap-4 px-4 pt-6">
          <button data-close="#dialog_b" className="relative flex flex-row items-center justify-center gap-x-2 p-2.5 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
            <span className="material-symbols-outlined">close</span>
          </button>
    
          <h3 className="flex flex-grow text-[1.375rem] leading-7">Full-screen Dialogs</h3>
        </div>
        <div className="relative px-8 py-4 overflow-y-scroll scrollbars">
          <p className="mb-4">Insert content in here.</p>
        </div>
      </div>
    </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
             <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Navigation</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="flex flex-col md:flex-wrap md:flex-row gap-4 md:gap-8">
    
                  <div className="flex flex-col mb-6">
                    <p className="text-sm tracking-[0.1px] mb-3">Bottom App Bar</p>
                    <div className="flex flex-wrap flex-row gap-8 pt-10 overflow-hidden bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700">
                      <div className="w-full md:max-w-[412px] text-sm flex flex-row space-x-2 items-center justify-center">
                        <div className="flex flex-row justify-between items-center py-3 pl-1 pr-4 gap-2 w-full md:w-[412px] bg-surface-200 dark:bg-surfacedark-200">
                          <div className="flex flex-row gap-2 items-center">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">archive</button>
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">label</button>
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">delete</button>
                          </div>
                          <button className="flex justify-center items-center w-14 h-14 rounded-2xl bg-secondary-100 dark:bg-secondary-700 hover:shadow-md">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="flex flex-col mb-6">
                    <p className="text-sm tracking-[0.1px] mb-3">Navigation Bar</p>
                    <div className="w-full flex pt-10 overflow-hidden md:max-w-[412px] bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700">
                      <div className="w-full md:max-w-[412px] text-sm flex flex-row space-x-2 items-center justify-center">
                        <div className="flex flex-row justify-center gap-2 w-full md:w-[412px] bg-surface-200 dark:bg-surfacedark-200">
                          <a href="#" className="group flex w-1/4 md:w-32 flex-col items-center justify-center px-0 py-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon active group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">mail</span>
                              <div className="absolute top-0 left-8 min-w-[22px] px-1 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">999+</div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Mail</p>
                          </a>
    
                          <a href="#" className="group flex w-1/4 md:w-32 flex-col items-center justify-center px-0 pt-3 pb-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">chat_bubble</span>
                              <div className="absolute top-0 right-3 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">1</div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Chat</p>
                          </a>
    
                          <a href="#" className="group flex w-1/4 md:w-32 flex-col items-center justify-center px-0 pt-3 pb-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">groups</span>
                              <div className="absolute top-1.5 right-5 w-1.5 h-1.5 rounded-full bg-error-600 dark:bg-error-200"></div>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">Rooms</p>
                          </a>
    
                          <a href="#" className="group flex w-1/4 md:w-32 flex-col items-center justify-center px-0 pt-3 pb-4 gap-1">
                            <div className="relative w-16 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                              <span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">For You</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="flex flex-col md:flex-wrap md:flex-row gap-10 mb-6">
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Navigation Drawer</p>
                      <div className="relative">
                        <div className="w-full md:w-[360px] inline-flex flex-col p-3 rounded-2xl bg-surface-100 dark:bg-surfacedark-100">
                          <div className="py-[18px] px-4 rounded-full">
                            <p className="text-sm tracking-[.00714em] font-medium">Mail</p>
                          </div>
                          <ul className="flex flex-col">
                            <li className="relative">
                              <a href="#" className="active flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">inbox</span>
                                Inbox
                                <span className="flex flex-grow justify-end text-sm tracking-[.00714em]">12</span>
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">outgoing_mail</span>
                                Sent
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">favorite</span>
                                Favorite
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">delete</span>
                                Trash
                              </a>
                            </li>
                          </ul>
                          <hr className="mx-4 border-gray-200 dark:border-gray-700" />
    
                          <div className="py-[18px] px-4 rounded-full">
                            <p className="text-sm tracking-[.00714em] font-medium">Labels</p>
                          </div>
                          <ul className="flex flex-col">
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full  hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">work</span>
                                Work
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">diversity_2</span>
                                Family
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">group</span>
                                Friends
                              </a>
                            </li>
                            <li className="relative">
                              <a href="#" className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                                <span className="material-symbols-outlined">star</span>
                                Clients
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Navigation Rail</p>
                      <div className="relative">
                        <div className="w-20 h-[585px] bg-surface-100 dark:bg-surfacedark-100 flex items-center flex-col gap-8 py-10">
                          <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">menu</button>
    
                          <button className="fabs relative flex flex-row items-center justify-center w-14 h-14 gap-x-2 p-2 rounded-2xl overflow-hidden shadow-lg text-sm tracking-[.00714em] font-medium bg-primary-100 dark:bg-primary-700 dark:text-primary-100">
                            <span className="material-symbols-outlined">edit</span>
                          </button>
                        
                          <div className="flex flex-col items-center gap-3">
                            <a href="#" className="group active min-h-[56px] flex flex-col items-center justify-center px-0 gap-1">
                              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                                <span className="material-symbols-outlined">inbox</span>
                                <div className="absolute top-0 left-8 min-w-[22px] px-1 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">12</div>
                              </div>
                              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Inbox</p>
                            </a>
    
                            <a href="#" className="group min-h-[56px] flex flex-col items-center justify-center px-0 gap-1">
                              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                                <span className="material-symbols-outlined">chat_bubble</span>
                                <div className="absolute top-0 right-3 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">1</div>
                              </div>
                              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Chat</p>
                            </a>
    
                            <a href="#" className="group min-h-[56px] flex flex-col items-center justify-center px-0 gap-1">
                              <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                                <span className="material-symbols-outlined">groups</span>
                                <div className="absolute top-1.5 right-5 w-1.5 h-1.5 rounded-full bg-error-600 dark:bg-error-200"></div>
                              </div>
                              <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">Rooms</p>
                            </a>
    
                            <a href="#" className="group min-h-[56px] flex w-32 flex-col items-center justify-center px-0 gap-1">
                                <div className="relative w-14 h-8 hover-icon group-hover:bg-secondary-100 dark:group-hover:bg-secondary-700 group-hover:bg-opacity-80 dark:group-hover:bg-opacity-80 flex items-center justify-center rounded-2xl">
                                  <span className="material-symbols-outlined">star</span>
                                </div>
                                <p className="text-xs text-neutral-900 dark:text-neutral-100 tracking-[.0416em] leading-tight">For You</p>
                              </a>
                          </div>
    
                        </div>
                      </div>
                    </div>
    
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Search</p>
                      <div className="flex flex-col gap-4 mb-12">
                        <div className="flex flex-row items-center justify-between w-full h-14 rounded-full bg-surface-100 dark:bg-surfacedark-100 p-2">
                          <div className="flex flex-row items-center flex-grow">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              menu
                            </button>
                            <input type="search" placeholder="Search..." className="w-full bg-transparent py-2 px-4 ring-0 focus:outline-none" />
                          </div>
          
                          <div className="w-10 h-10 flex items-center justify-center rounded-full text-base tracking-[0.15px] font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">
                            <img src="src/img/avatar.png" className="w-10 h-10 rounded-full" />
                          </div>
                        </div>
    
                        <div className="flex flex-row items-center justify-between w-full h-14 rounded-full bg-surface-100 dark:bg-surfacedark-100 p-2">
                          <div className="flex flex-row items-center flex-grow">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              menu
                            </button>
                            <input type="search" placeholder="Search..." className="w-full bg-transparent py-2 px-4 ring-0 focus:outline-none" />
                          </div>
          
                          <div className="w-10 h-10 flex items-center justify-center rounded-full text-base tracking-[0.15px] font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">A</div>
                        </div>
    
                        <div className="flex flex-row items-center justify-between w-full h-14 rounded-full bg-surface-100 dark:bg-surfacedark-100 p-2">
                          <div className="flex flex-row items-center flex-grow">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              menu
                            </button>
                            <input type="search" placeholder="Search..." className="w-full bg-transparent py-2 px-4 ring-0 focus:outline-none" />
                            <button type="submit" className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              search
                            </button>
                          </div>
                        </div>
    
                        <div className="flex flex-row items-center justify-between w-full h-14 rounded-full bg-surface-100 dark:bg-surfacedark-100 p-2">
                          <div className="flex flex-row items-center flex-grow">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              <span className="material-symbols-outlined !text-2xl">search</span>
                            </button>
                            <input type="search" placeholder="Search..." className="w-full bg-transparent py-2 px-4 ring-0 focus:outline-none" />
                            <button type="submit" className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              keyboard_voice
                            </button>
                          </div>
                        </div>
    
                        <div className="flex flex-col bg-surface-200 dark:bg-surfacedark-200 rounded-[28px]">
                          <div className="min-h-[56px] flex flex-row items-center gap-2 px-2">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              arrow_back
                            </button>
    
                            <input type="search" placeholder="Search..." className="w-full bg-transparent py-2 pr-4 ring-0 focus:outline-none" />
                          </div>
                          <hr className="border-gray-200 dark:border-gray-700" />
                          <div className="flex flex-col">
                            <a href="#" className="min-h-[72px] flex flex-row items-center gap-4 py-2 pl-4 pr-6 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                              <div className="w-10 h-10 flex items-center justify-center rounded-full text-base tracking-[0.15px] font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">A</div>
                              <div className="flex flex-col flex-grow">
                                <p className="tracking-[.03125em]">List Item</p>
                                <span className="text-sm tracking-[0.25px]">Supporting line text</span>
                              </div>
                            </a>
                            <a href="#" className="min-h-[72px] flex flex-row items-center gap-4 py-2 pl-4 pr-6 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                              <div className="w-10 h-10 flex items-center justify-center rounded-full text-base tracking-[0.15px] font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">A</div>
                              <div className="flex flex-col flex-grow">
                                <p className="tracking-[.03125em]">List Item</p>
                                <span className="text-sm tracking-[0.25px]">Supporting line text</span>
                              </div>
                            </a>
                            <a href="#" className="min-h-[72px] flex flex-row items-center gap-4 py-2 pl-4 pr-6 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
                              <div className="w-10 h-10 flex items-center justify-center rounded-full text-base tracking-[0.15px] font-bold bg-primary-600 text-white dark:bg-primary-200 dark:text-neutral-900">A</div>
                              <div className="flex flex-col flex-grow">
                                <p className="tracking-[.03125em]">List Item</p>
                                <span className="text-sm tracking-[0.25px]">Supporting line text</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="flex flex-col md:flex-wrap md:flex-row gap-10">
                    <div className="flex flex-col mb-6">
                      <p className="text-sm tracking-[0.1px] mb-3">Top App Bar</p>
                      <div className="flex flex-col gap-4">
                        <div className="w-full md:w-[360px] h-16 flex flex-row items-center justify-between gap-1.5 bg-surface-100 dark:bg-surfacedark-100">
                          <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                            menu
                          </button>
                          <h2 className="flex flex-grow justify-start text-[1.375rem] leading-7">LOGO</h2>
    
                          <div className="flex flex-row justify-end items-center">
                            <button className="relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              <span className="material-symbols-outlined">mail</span>
                              <div className="absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">1</div>
                            </button>
                            <button className="relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              <span className="material-symbols-outlined">notifications</span>
                              <div className="absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">5</div>
                            </button>
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              person
                            </button>
                          </div>
                        </div>
    
                        <div className="w-full md:w-[360px] h-16 flex flex-row items-center justify-between gap-1.5 bg-surface-100 dark:bg-surfacedark-100">
                          <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                            menu
                          </button>
                          <h2 className="text-[1.375rem] leading-7">Product</h2>
                          <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                            person
                          </button>
                        </div>
    
                        <div className="w-full md:w-[360px] h-16 flex flex-row items-center justify-between gap-1.5 bg-surface-100 dark:bg-surfacedark-100">
                          <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                            arrow_back
                          </button>
                          <h2 className="flex flex-grow justify-start text-[1.375rem] leading-7">Product</h2>
                          <div className="flex flex-row justify-end items-center">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              attach_file
                            </button>
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              event
                            </button>
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              more_vert
                            </button>
                          </div>
                        </div>
                        
                        <div className="w-full md:w-[360px] flex flex-col gap-1 bg-surface-100 dark:bg-surfacedark-100">
                          <div className="w-full h-16 flex flex-row items-center justify-between gap-1.5">
                            <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                              <span className="material-symbols-outlined">arrow_back</span>
                            </button>
    
                            <div className="flex flex-row justify-end items-center">
                              <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                                <span className="material-symbols-outlined">attach_file</span>
                              </button>
                              <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                                <span className="material-symbols-outlined">event</span>
                              </button>
                              <button className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
                                <span className="material-symbols-outlined">more_vert</span>
                              </button>
                            </div>
                          </div>
    
                          <h1 className="text-2xl px-4 mb-4">Headline</h1>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex flex-col mb-6">
                      <p className="text-sm tracking-[0.1px] mb-3">Tabs</p>
                      <div className="flex flex-col gap-4">
    <div className="tabs flex flex-col w-full md:w-[360px]">
      <div className="relative flex flex-row items-center">
        <button data-type="tabs" data-target="#tab-1" className="active w-1/3 md:w-[120px] h-16 px-4 py-2 flex flex-col justify-end items-center gap-1 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">music_note</span>
          <p className="text-sm tracking-[.00714em]">Music</p>
        </button>
        <button data-type="tabs" data-target="#tab-2" className="w-1/3 md:w-[120px] h-16 px-4 py-2 flex flex-col justify-end items-center gap-1 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">image</span>
          <p className="text-sm tracking-[.00714em]">Photos</p>
        </button>
        <button data-type="tabs" data-target="#tab-3" className="w-1/3 md:w-[120px] h-16 px-4 py-2 flex flex-col justify-end items-center gap-1 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">videocam</span>
          <p className="text-sm tracking-[.00714em]">Video</p>
        </button>
        <div role="indicator" className="absolute left-0 bottom-0 transition-all duration-200 ease-in-out bg-primary-600 dark:bg-primary-200 w-[40px] ml-[10%] md:ml-[40px] h-0.5 rounded-t-full"></div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col">
        <div id="tab-1" role="tabpanel" className="active [&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 1</h3>
        </div>
        <div id="tab-2" role="tabpanel" className="[&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 2</h3>
        </div>
        <div id="tab-3" role="tabpanel" className="[&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 3</h3>
        </div>
      </div>
    </div>
    
    <div className="tabs flex flex-col w-full md:w-[360px]">
      <div className="relative flex flex-row items-center">
        <button data-type="tabs" data-target="#tab-4" className="active w-1/3 md:w-[120px] h-16 px-4 flex flex-col justify-end items-center gap-1 relative py-2 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">music_note</span>
          <p className="text-sm tracking-[.00714em]">Music</p>
        </button>
        <button data-type="tabs" data-target="#tab-5" className="w-1/3 md:w-[120px] h-16 px-4 flex flex-col justify-end items-center gap-1 relative py-2 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">image</span>
          <p className="text-sm tracking-[.00714em]">Photos</p>
        </button>
        <button data-type="tabs" data-target="#tab-6" className="w-1/3 md:w-[120px] h-16 px-4 flex flex-col justify-end items-center gap-1 relative py-2 hover:bg-surface-100 dark:hover:bg-surfacedark-100">
          <span className="material-symbols-outlined">videocam</span>
          <p className="text-sm tracking-[.00714em]">Video</p>
        </button>
        <div role="indicator" className="absolute left-0 bottom-0 transition-all duration-200 ease-in-out bg-primary-600 dark:bg-primary-200 w-1/3 md:w-[120px] h-0.5 rounded-t-full"></div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col">
        <div id="tab-4" role="tabpanel" className="active [&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 1</h3>
        </div>
        <div id="tab-5" role="tabpanel" className="[&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 2</h3>
        </div>
        <div id="tab-6" role="tabpanel" className="[&.active]:block hidden py-4 transition duration-400 ease-in-out">
          <h3>Tabs content 3</h3>
        </div>
      </div>
    </div>
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
             <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Selection</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Checkbox</p>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input type="checkbox" name="checked-demo" className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" checked="" />
                          <span>Checkbox</span>
                        </label>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input type="checkbox" name="checked-demo" className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" />
                          <span>Checkbox</span>
                        </label>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input type="checkbox" name="checked-demo" className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" disabled="" checked="" />
                          <span>Disabled</span>
                        </label>
                      </div>
                    </div>
    
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Radio</p>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" name="radio" type="radio" value="female" checked="" />
                          Female
                        </label>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" name="radio" type="radio" value="male" />
                          Male
                        </label>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-center">
                          <input className="w-[18px] h-[18px] accent-primary-600 hover:accent-primary-600 dark:accent-primary-200 rounded-[2px] ltr:mr-3 rtl:ml-3" name="radio" type="radio" value="none" disabled="" />
                          Disabled
                        </label>
                      </div>
                    </div>
    
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Chips</p>
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="inline-flex flex-row items-center gap-2 h-8 py-1.5 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 focus:bg-surface-400 dark:focus:bg-surfacedark-400 border border-gray-500 dark:border-gray-200 rounded-lg text-sm tracking-[.00714em]">
                          Enabled
                        </div>
    
                        <div className="inline-flex flex-row items-center gap-2 h-8 py-1.5 px-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 focus:bg-surface-400 dark:focus:bg-surfacedark-400 border border-gray-500 dark:border-gray-200 rounded-lg text-sm tracking-[.00714em]">
                          Enabled
                          <span className="material-symbols-outlined cursor-pointer !text-base">close</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center gap-2 h-8 py-1 pl-1 pr-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 focus:bg-surface-400 dark:focus:bg-surfacedark-400 border border-gray-500 dark:border-gray-200 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden">
                            <img alt="Avatar" src="src/img/avatar.png" className="w-6 h-6" />
                          </div>
                          <span className="">Avatar</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center gap-2 h-8 py-1 pl-1 pr-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 focus:bg-surface-400 dark:focus:bg-surfacedark-400 border border-gray-500 dark:border-gray-200 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-700">
                            <span className="material-symbols-outlined !text-white">face</span>
                          </div>
                          <span>With Icon</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center gap-2 h-8 py-1 pl-1 pr-3 hover:bg-surface-200 dark:hover:bg-surfacedark-200 focus:bg-surface-400 dark:focus:bg-surfacedark-400 border border-gray-500 dark:border-gray-200 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-700">
                            <span className="material-symbols-outlined !text-white">face</span>
                          </div>
                          <span>With Icon</span>
                          <span className="material-symbols-outlined cursor-pointer !text-base">close</span>
                        </div>
                      </div>
    
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="inline-flex flex-row items-center border border-secondary-100 dark:border-secondary-700 gap-2 h-8 py-1.5 px-3 bg-secondary-100 dark:bg-secondary-700 rounded-lg text-sm tracking-[.00714em]">
                          Enabled
                        </div>
    
                        <div className="inline-flex flex-row items-center border border-secondary-100 dark:border-secondary-700 gap-2 h-8 py-1.5 px-3 bg-secondary-100 dark:bg-secondary-700 rounded-lg text-sm tracking-[.00714em]">
                          Enabled
                          <span className="material-symbols-outlined cursor-pointer !text-base">close</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center border border-secondary-100 dark:border-secondary-700 gap-2 h-8 py-1 pl-1 pr-3 bg-secondary-100 dark:bg-secondary-700 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden">
                            <img alt="Avatar" src="src/img/avatar.png" className="w-6 h-6" />
                          </div>
                          <span className="">Avatar</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center border border-secondary-100 dark:border-secondary-700 gap-2 h-8 py-1 pl-1 pr-3 bg-secondary-100 dark:bg-secondary-700 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-700">
                            <span className="material-symbols-outlined !text-white">face</span>
                          </div>
                          <span>With Icon</span>
                        </div>
    
                        <div className="inline-flex flex-row items-center border border-secondary-100 dark:border-secondary-700 gap-2 h-8 py-1 pl-1 pr-3 bg-secondary-100 dark:bg-secondary-700 rounded-[30px] text-sm tracking-[.00714em]">
                          <div className="flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-700">
                            <span className="material-symbols-outlined !text-white">face</span>
                          </div>
                          <span>With Icon</span>
                          <span className="material-symbols-outlined cursor-pointer !text-base">close</span>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Switch</p>
                      <div className="toggle-switch relative inline-flex w-[52px] h-8 mb-6">
                        <input id="switch3" className="toggle-checkbox hidden" type="checkbox" />
                        <label for="switch3" className="toggle-icon relative block w-12 h-8 rounded-full transition-color duration-150 ease-out"></label>
                      </div>
    
                      <div className="toggle-switch relative inline-flex w-[52px] h-8 mb-6">
                        <input id="switch4" className="toggle-checkbox hidden" type="checkbox" />
                        <label for="switch4" className="toggle-default relative block w-12 h-8 rounded-full transition-color duration-150 ease-out"></label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-10">
                    <div className="w-full md:w-80 flex flex-col">
                      <p className="text-sm tracking-[0.1px] mb-3">Range Sliders</p>
                      <div className="relative min-h-[56px] mb-3">
                        <label for="default-range" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Media Volume</label>
                        <div className="group relative w-full h-1 bg-gray-100 dark:bg-gray-700">
                          <input id="default-range" type="range" min="0" max="100" value="78" data-type="slider" className="range absolute z-10 left-0 top-0 w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer" />
                          <span className="absolute left-0 top-0 rounded h-1 bg-primary-600 dark:bg-primary-200" style={{width: "78%"}}></span>
                        </div>
                      </div>
    
                      <div className="relative min-h-[56px] mb-3">
                        <label for="default-range2" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Call Volume</label>
                        <div className="group relative w-full h-1 bg-gray-100 dark:bg-gray-700">
                          <input id="default-range2" type="range" min="0" max="100" value="56" data-type="slider" className="range absolute z-10 left-0 top-0 w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer" />
                          <span className="absolute left-0 top-0 rounded h-1 bg-primary-600 dark:bg-primary-200" style={{width: "56%"}}></span>
                        </div>
                      </div>
    
                      <div className="relative min-h-[56px] mb-3">
                        <label for="default-range3" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Ring Volume</label>
                        <div className="group relative w-full h-1 bg-gray-100 dark:bg-gray-700">
                          <input id="default-range3" type="range" min="0" max="100" value="30" data-type="slider" className="range absolute z-10 left-0 top-0 w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer" />
                          <span className="absolute left-0 top-0 rounded h-1 bg-primary-600 dark:bg-primary-200" style={{width: "30%"}}></span>
                        </div>
                      </div>
    
                      <div className="relative min-h-[56px] mb-3">
                        <label for="default-range4" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Alarm Volume</label>
                        <div className="group relative w-full h-1 bg-gray-100 dark:bg-gray-700">
                          <input id="default-range4" type="range" min="0" max="100" value="60" data-type="slider" className="range absolute z-10 left-0 top-0 w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer" />
                          <span className="absolute left-0 top-0 rounded h-1 bg-primary-600 dark:bg-primary-200" style={{width: "60%"}}></span>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex flex-wrap flex-col sm:flex-row gap-6">
                      <div className="flex flex-col">
                        <p className="text-sm tracking-[0.1px] mb-3">Menus</p>
    <div className="relative inline-block">
      <button data-type="dropdown" data-target="#dropdown1" className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
        Show menu
        <span className="material-symbols-outlined">expand_more</span>
      </button>
    
      <ul id="dropdown1" role="dropdownmenu" className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out left-0 md:left-auto md:right-0 min-w-[200px] inline-flex flex-col py-2 rounded bg-surface-200 dark:bg-surfacedark-200 shadow-md dark:shadow-gray-50/10">
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">person</span>
            Profile
          </a>
        </li>
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">settings</span>
            Setting
          </a>
        </li>
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">help_center</span>
            Help
          </a>
        </li>
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">power_settings_new</span>
            Logout
          </a>
        </li>
      </ul>
    </div>
                      </div>
    
                      <div className="flex flex-col gap-1">
                        <p className="text-sm tracking-[0.1px] mb-3">Datalist</p>
    <div className="relative inline-block">
      <div className="mb-6">
        <div className="relative z-0">
          <input name="inputtext" id="datainput" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " list="datalist" value="" />
          <label for="datainput" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Color</label>
          <datalist id="datalist">
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Green">Green</option>
          </datalist>
        </div>
      </div>
    </div>
                      </div>
    
                      <div className="flex flex-col">
                        <p className="text-sm tracking-[0.1px] mb-3">Edit</p>
    <div className="relative inline-block">
      <button data-type="dropdown" data-target="#dropdown2" className="material-symbols-outlined relative !inline-flex !items-center justify-center w-12 h-12 gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] text-center font-medium hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400 ml-auto">
        more_vert
      </button>
    
      <ul id="dropdown2" role="dropdownmenu" className="[&.show]:!opacity-100 [&.show]:!visible opacity-0 invisible absolute top-[3.1rem] z-30 transition duration-400 ease-in-out left-0 md:left-auto md:right-0 min-w-[200px] inline-flex flex-col py-2 rounded bg-surface-200 dark:bg-surfacedark-200 shadow-md dark:shadow-gray-50/10">
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">settings</span>
            Edit
          </a>
        </li>
        <li className="relative">
          <a href="#" className="min-h-[3rem] flex flex-row items-center gap-4 py-2 px-3 hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30">
          <span className="material-symbols-outlined">delete</span>
            Delete
          </a>
        </li>
      </ul>
    </div>
                      </div>
    
                    </div>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-wrap w-full flex-col gap-8 md:p-10 bg-surface-100 dark:bg-surfacedark-100  rounded-2xl">
             <div className="flex flex-col gap-2">
              <h2 className="text-xl leading-tight">Text Inputs</h2>
              <div className="bg-neutral-10 dark:bg-neutral-900 p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <div className="flex flex-wrap gap-4 md:gap-8">
                  <div className="flex flex-wrap flex-col w-full md:w-[360px] gap-6">
                    <p className="text-sm tracking-[0.1px] mb-3">Input filled</p>
                    <div className="flex flex-col">
                      <div className="relative z-0">
                        <input type="text" aria-label="inputtext" name="inputtext" id="input11" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " value="" />
                        <label for="input11" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
                      </div>
                      <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
    
                    <div className="relative z-0">
                      <input type="text" aria-label="inputtext" name="inputtext" id="input22" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " value="" />
                      <label for="input22" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Last name</label>
                    </div>
    
                    <div className="relative z-0">
                      <input type="text" aria-label="inputtext" name="inputtext" id="input77" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " value="" disabled="" />
                      <label for="input77" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Disabled</label>
                    </div>
    
                    <div className="relative z-0 input-filled">
                      <div className="absolute left-4 top-4 z-10">
                        <span className="material-symbols-outlined">search</span>
                      </div>
    
                      <input type="search" aria-label="inputtext" name="inputtext" id="inputss" className="w-full h-14 block leading-5 relative pt-2 pl-14 pr-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " value="" />
                      <label for="inputss" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-14 peer-focus:left-14 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Search</label>
                    </div>
    
                    <div className="relative z-0">
                      <input type="email" aria-label="inputtext" name="inputtext" id="input22" className="w-full h-14 block leading-5 relative pt-2 px-4 rounded-t text-gray-800 bg-gray-100 dark:bg-gray-700 border-b focus:border-b-2 border-gray-500 dark:border-gray-400 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:focus:border-primary-200 peer" placeholder=" " value="" />
                      <label for="input22" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Email</label>
                    </div>
                  </div>
    
                  <div className="flex flex-wrap flex-col w-full md:w-[360px] gap-6">
                     <p className="text-sm tracking-[0.1px] mb-3">Input outlined</p>
                    <div className="relative flex flex-col">
                      <div className="relative z-0">
                        <input type="text" aria-label="inputtext" name="inputtext" id="input33" className="w-full h-14 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer" placeholder=" " value="" />
    
                        <label for="input33" className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">First name</label>
                      </div>
                      <div className="pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
    
                    <div className="relative flex flex-col">
                      <div className="relative z-0">
                        <input type="text" aria-label="inputtext" name="inputtext" id="input44" className="w-full h-14 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer" placeholder=" " value="" />
    
                        <label for="input44" className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Last name</label>
                      </div>
                      <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
    
                    <div className="relative flex flex-col">
                      <div className="relative z-0">
                        <input type="text" aria-label="inputtext" name="inputtext" id="input88" className="w-full h-14 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer" placeholder=" " value="" disabled="" />
    
                        <label for="input88" className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Disabled</label>
                      </div>
                      <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
    
                    <div className="relative flex flex-col">
                      <div className="relative z-0">
                        <div className="absolute left-4 top-4 z-10">
                          <span className="material-symbols-outlined">search</span>
                        </div>
    
                        <input type="search" aria-label="inputtext" name="inputtext" id="input55" className="w-full h-14 block leading-5 relative py-2 pl-14 pr-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer" placeholder=" " value="" />
    
                        <label for="input55" className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-12 peer-focus:left-12 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Search</label>
                      </div>
                      <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
    
                    <div className="relative flex flex-col">
                      <div className="relative z-0">
                        <input type="email" aria-label="inputtext" name="inputtext" id="input99" className="w-full h-14 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-600 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer" placeholder=" " value="" />
    
                        <label for="input99" className="absolute tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-600 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-600 dark:peer-invalid:text-error-200">Email</label>
                      </div>
                      <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">Supporting text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
      <footer className="p-4 md:py-6 mb-24 md:mb-0 flex flex-col md:flex-row justify-center text-center">
        <p>UI Design by <a className="text-primary-600 dark:text-primary-200 hover:underline md:mr-3" href="https://m3.material.io/" target="_blank">Google Material Design</a></p>
        <p>Development by <a className="text-primary-600 dark:text-primary-200 hover:underline" href="https://twitter.com/ari_budin" target="_blank">Ari budin</a></p>
      </footer>
    </body>
    );
}