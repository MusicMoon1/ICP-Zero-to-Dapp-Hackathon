import { Icon } from "@iconify/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export default function Notifications() {
  return (
    <>
      <Popover>
        <PopoverHandler>
          <button className=" relative text-light-neutral">
            <Icon
              icon="solar:bell-broken"
              fontSize={25}
              className=" leading-[0] mt-1"
            />
            <div className=" absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary text-xs text-center font-semibold"></div>
          </button>
        </PopoverHandler>
        <PopoverContent className=" z-[999999] lg:mt-5 bg-black border-neutral p-0  max-h-96 overflow-auto">
          <div className="relative bg-black p-2 min-w-[20rem]">
            <div className=" flex justify-between items-center mb-3">
              <h1 className=" text-white text-xl sm:text-2xl font-semibold">
                Notifications
              </h1>
              <button className="btn-primary">See all</button>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className=" flex justify-between items-center py-4 hover:bg-secondary px-2 rounded-2xl"
              >
                <div className=" flex justify-start items-center space-x-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                    alt=""
                    className=" w-16 h-16 rounded-xl"
                  />
                  <div className=" flex justify-center flex-col items-start text-white">
                    <p className=" font-semibold text-sm sm:text-base">
                      ETH received
                    </p>
                    <p className=" text-xs sm:text-base">0.0001 ETH received</p>
                    <p className=" text-light-neutral text-xs sm:text-sm">
                      2 days ago
                    </p>
                  </div>
                </div>
                <div className=" h-4 w-4 bg-primary rounded-full"></div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group outline-0`}
            >
          
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 sm:left-[5%] top-0 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border border-neutral max-h-96 overflow-auto">
                  <div className="relative bg-black p-2">
                    <div className=" flex justify-between items-center mb-3">
                      <h1 className=" text-white text-xl sm:text-2xl font-semibold">
                        Notifications
                      </h1>
                      <button className="btn-primary">See all</button>
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <div
                        key={item}
                        className=" flex justify-between items-center py-4 hover:bg-secondary px-2 rounded-2xl"
                      >
                        <div className=" flex justify-start items-center space-x-4 ">
                          <img
                            src="https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                            alt=""
                            className=" w-16 h-16 rounded-xl"
                          />
                          <div className=" flex justify-center flex-col items-start text-white">
                            <p className=" font-semibold text-sm sm:text-base">
                              ETH received
                            </p>
                            <p className=" text-xs sm:text-base">
                              0.0001 ETH received
                            </p>
                            <p className=" text-light-neutral text-xs sm:text-sm">
                              2 days ago
                            </p>
                          </div>
                        </div>
                        <div className=" h-4 w-4 bg-primary rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover> */}
    </>
  );
}
