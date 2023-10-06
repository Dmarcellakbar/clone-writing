import React from 'react';
import Sidelist from './Sidelist';

export default function Sidedash() {
  return (
    <>
      <div className="sidebar hidden md:block lg:block">
        <div className="sidebar-main bg-slate-100">
          <div className="flex h-full w-full flex-col items-center border-r">
            <div className="flex pt-4">
              <div>
                <svg
                  version="1.1"
                  className="fill-violet-500 h-8 mb-6 open-hidden closed-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 72.5 40"
                  // style={{ enableBackground: 'new 0 0 72.5 40' }}
                  xmlSpace="preserve"
                >
                  <path
                    className="st0"
                    d="M13.5,30.2l-8-22.6h5.1L15.7,23l5.5-15.4h3.6l5.3,15.7l5.4-15.7h4.8l-8.1,22.6h-4l-5.3-15l-5.3,15H13.5z
	                     M45.4,30.2V7.6h5v9.1h10.5V7.6h5v22.6h-5v-9.4H50.4v9.4H45.4z"
                  />
                </svg>
              </div>
            </div>
            <div className="is-scrollbar-hidden flex grow flex-col overflow-y-auto  gap-4 pt-6">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 text-indigo-600 hover:text-indigo-700">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z"
                    />
                    <path
                      className="fa-secondary"
                      d="M64.1 448L64 270.5l224-196L512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1H128.1c-35.3 0-64-28.6-64-64zM248 240c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V264c0-13.3-10.7-24-24-24H248z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 text-indigo-600 hover:text-indigo-700">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M160 384H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7L322.7 50.7c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64z"
                    />
                    <path
                      className="fa-secondary"
                      d="M24 96c13.3 0 24 10.7 24 24V344c0 48.6 39.4 88 88 88H456c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 480 0 419.1 0 344V120c0-13.3 10.7-24 24-24z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 text-indigo-600 hover:text-indigo-700 purple-button text-white">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
                    />
                    <path
                      className="fa-secondary"
                      d="M480 72c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40V184c0 22.1 17.9 40 40 40H440c22.1 0 40-17.9 40-40V72zM224 328c0-22.1-17.9-40-40-40H72c-22.1 0-40 17.9-40 40V440c0 22.1 17.9 40 40 40H184c22.1 0 40-17.9 40-40V328z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 text-indigo-600 hover:text-indigo-700">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H352 256 96c-17.7 0-32 14.3-32 32s14.3 32 32 32H256h96 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM264 200l-38.8 16.6c-6.5 2.8-6.5 11.9 0 14.7L264 248l16.6 38.8c2.8 6.5 11.9 6.5 14.7 0L312 248l38.8-16.6c6.5-2.8 6.5-11.9 0-14.7L312 200l-16.6-38.8c-2.8-6.5-11.9-6.5-14.7 0L264 200zM168.8 78.3L160 96l-17.7 8.8c-5.9 2.9-5.9 11.4 0 14.3L160 128l8.8 17.7c2.9 5.9 11.4 5.9 14.3 0L192 128l17.7-8.8c5.9-2.9 5.9-11.4 0-14.3L192 96l-8.8-17.7c-2.9-5.9-11.4-5.9-14.3 0z"
                    />
                    <path
                      className="fa-secondary"
                      d="M64 416c0-17.7 14.3-32 32-32H416v64H96c-17.7 0-32-14.3-32-32z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex pt-48 lg:pt-52 flex-col items-center space-y-3">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 text-indigo-600 hover:text-indigo-700">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M489.6 191.2c6.9-6.2 9.6-15.9 6.4-24.6c-4.4-11.9-9.7-23.3-15.8-34.3l-4.7-8.1c-6.6-11-14-21.4-22.1-31.2c-5.9-7.2-15.7-9.6-24.5-6.8L389.1 98.8c-10 3.2-20.8 1.1-29.7-4.6c-4.9-3.1-9.9-6.1-15.1-8.7c-9.3-4.8-16.5-13.2-18.8-23.4l-8.9-40.7c-2-9.1-9-16.3-18.2-17.8C284.7 1.2 270.5 0 256 0s-28.7 1.2-42.5 3.5c-9.2 1.5-16.2 8.7-18.2 17.8l-8.9 40.7c-2.2 10.2-9.5 18.6-18.8 23.4c-5.2 2.7-10.2 5.6-15.1 8.7c-8.8 5.7-19.7 7.7-29.7 4.6L83.1 86.1c-8.8-2.8-18.6-.3-24.5 6.8c-8.1 9.8-15.5 20.2-22.1 31.2l-4.7 8.1c-6.1 11-11.4 22.4-15.8 34.3c-3.2 8.7-.5 18.4 6.4 24.6l30.9 28.1c7.7 7.1 11.4 17.5 10.9 27.9c-.1 2.9-.2 5.8-.2 8.8s.1 5.9 .2 8.8c.5 10.5-3.1 20.9-10.9 27.9L22.4 320.8c-6.9 6.2-9.6 15.9-6.4 24.6c4.4 11.9 9.7 23.3 15.8 34.3l4.7 8.1c6.6 11 14 21.4 22.1 31.2c5.9 7.2 15.7 9.6 24.5 6.8l39.7-12.6c10-3.2 20.8-1.1 29.7 4.6c4.9 3.1 9.9 6.1 15.1 8.7c9.3 4.8 16.5 13.2 18.8 23.4l8.9 40.7c2 9.1 9 16.3 18.2 17.8c13.8 2.3 28 3.5 42.5 3.5s28.7-1.2 42.5-3.5c9.2-1.5 16.2-8.7 18.2-17.8l8.9-40.7c2.2-10.2 9.4-18.6 18.8-23.4c5.2-2.7 10.2-5.6 15.1-8.7c8.8-5.7 19.7-7.7 29.7-4.6l39.7 12.6c8.8 2.8 18.6 .3 24.5-6.8c8.1-9.8 15.5-20.2 22.1-31.2l4.7-8.1c6.1-11 11.3-22.4 15.8-34.3c3.2-8.7 .5-18.4-6.4-24.6l-30.9-28.1c-7.7-7.1-11.4-17.5-10.9-27.9c.1-2.9 .2-5.8 .2-8.8s-.1-5.9-.2-8.8c-.5-10.5 3.1-20.9 10.9-27.9l30.9-28.1zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                    <path
                      className="fa-secondary"
                      d="M192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex -mr mx-3 clear-button h-9 rounded justify-center items-center clear-button">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM112 256c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
                    />
                    <path
                      className="fa-secondary"
                      d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM112 256c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="w-9 rounded-full bg-gray-200 h-1">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1 rounded-full"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex -mr mx-3 clear-button h-9 rounded justify-center items-center clear-button">
                  <svg
                    className="fill-indigo-600 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                                        .fa-secondary {\n                                            opacity: .4\n                                        }',
                        }}
                      />
                    </defs>
                    <path
                      className="fa-primary"
                      d="M147.7 75.5c11.3 13.6 9.4 33.8-4.1 45.1C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4c-13.6-11.3-15.4-31.5-4.1-45.1s31.5-15.4 45.1-4.1C462.2 115.4 496 181.8 496 256c0 132.5-107.5 240-240 240S16 388.6 16 256c0-74.2 33.7-140.6 86.6-184.6c13.6-11.3 33.8-9.4 45.1 4.1z"
                    />
                    <path
                      className="fa-secondary"
                      d="M256 0c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Sidelist />
      </div>
    </>
  );
}
