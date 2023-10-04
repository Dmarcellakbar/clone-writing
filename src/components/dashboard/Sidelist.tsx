import React from 'react';

export default function Sidelist() {
  return (
    <>
      <div className="sidebar-panel bg-slate-100" style={{ zoom: '0.7' }}>
        <div className="flex h-full grow flex-col pl-[var(--main-sidebar-width)]">
          <div className="flex h-16 w-full items-center justify-between pl-4 pr-1">
            <div className="flex items-center">
              <img
                height={38}
                width={173}
                src="/logowide.svg"
                alt="Writing Hero AI Logo"
              />
            </div>
          </div>
          <div className="my-3 mt-10 px-2 closed-hidden">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  className="mr-3 h-4 w-4 text-gray-400"
                  x-description="Heroicon name: solid/search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="search"
                name="search"
                className="focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search..."
                data-np-intersection-state="visible"
              />
            </div>
          </div>
          <div className="px-2 text-start">
            <div className="px-2 flex select-none px-3 py-2 content-center cursor-pointer rounded purple-button text-white bg-purple-600">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">All</span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-yellow-400 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Favorites
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M0 192c0-35.3 28.7-64 64-64H192V320v32V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32l0-128c-35.3 0-64-28.7-64-64V192zm512 48c0 27.9-13.4 51.6-32 60.4V179.6c18.6 8.8 32 32.5 32 60.4z"
                    />
                    <path
                      className="fa-secondary"
                      d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192v32 32 96 32 32h8.7c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Advertisements
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M48 96c26.5 0 48 21.5 48 48V368c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48H128V224h16c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368V144c0-26.5 21.5-48 48-48z"
                    />
                    <path
                      className="fa-secondary"
                      d="M224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Blog Posts
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M384 96h80c25.6 0 48 22.4 48 48V288H0V144c0-25.6 22.4-48 48-48h80V56 48c0-25.6 22.4-48 48-48h8H328h8c25.6 0 48 22.4 48 48v8V96zm-48 0V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8V96H336z"
                    />
                    <path
                      className="fa-secondary"
                      d="M192 288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Business Tools
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48z"
                    />
                    <path
                      className="fa-secondary"
                      d="M0 112V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V112c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">Email</span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M406.6 246.6L439 279c15.1 15.1 41 4.4 41-17V152c0-13.3-10.7-24-24-24H345.9c-21.4 0-32.1 25.9-17 41l32.4 32.4L304 258.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 253.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0l80-80z"
                    />
                    <path
                      className="fa-secondary"
                      d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Marketing
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H352 256 96c-17.7 0-32-14.3-32-32s14.3-32 32-32H256h96 64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm32 157.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4C258.9 102.5 274.5 96 290.7 96c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"
                    />
                    <path
                      className="fa-secondary"
                      d="M64 416c0-17.7 14.3-32 32-32H416v64H96c-17.7 0-32-14.3-32-32z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Non-Business
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M104 216c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24V216zm80-96c0-13.3 10.7-24 24-24s24 10.7 24 24V280c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160zm80 64c0-13.3 10.7-24 24-24s24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24V184zM457.4 502.6L330.7 376C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"
                    />
                    <path
                      className="fa-secondary"
                      d="M208 416A208 208 0 1 0 208 0a208 208 0 1 0 0 416zM104 216c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24V216zm80-96c0-13.3 10.7-24 24-24s24 10.7 24 24V280c0 13.3-10.7 24-24 24s-24-10.7-24-24V120zm80 64c0-13.3 10.7-24 24-24s24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">SEO</span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.3 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9l0 0 0 0 .2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176z"
                    />
                    <path
                      className="fa-secondary"
                      d="M231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2 0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Social Media
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V224H0V96zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm120-24c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"
                    />
                    <path
                      className="fa-secondary"
                      d="M96 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM448 480c35.3 0 64-28.7 64-64V224L0 224V416c0 35.3 28.7 64 64 64l384 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Website
                  </span>
                </div>
              </div>
            </div>
            <div className="flex select-none px-3 py-2 content-center cursor-pointer rounded clear-button">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8">
                  <svg
                    className="fill-indigo-600 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                            .fa-secondary {\n                                                opacity: .4\n                                            }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M384 288v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V272c0-26.5 21.5-48 48-48H592c26.5 0 48 21.5 48 48v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H512l0 128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H432c-17.7 0-32-14.3-32-32s14.3-32 32-32h16l0-128H384z"
                    />
                    <path
                      className="fa-secondary"
                      d="M64 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V80C0 53.5 21.5 32 48 32H192 336c26.5 0 48 21.5 48 48v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H224l0 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32l0-320H64z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold truncate">
                    Writing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
