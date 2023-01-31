import dashboard from "../../assets/dashboard.png";
import user from "../../assets/user.png";
import stake from "../../assets/stake.png";
import buy from "../../assets/buy.png";
import book from "../../assets/book.png";

import telegram from "../../assets/social/telegram.png";
import twitter from "../../assets/social/twitter.png";
import medium from "../../assets/social/medium.png";

const Navbar = () => {
  return (
    <nav>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col">
            <div className="h-20 mb-2 border-black border-2 gap-3 p-1 flex justify-start items-center">
              <div className="bg-black w-16 h-16 rounded-full"></div>
              <h1 className="text-2xl">Kristim</h1>
            </div>
            <ul className="space-y-2">
              {/* dashboard */}
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={dashboard} alt="dashboard" className="w-7" />
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>
              {/* user */}
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={user} alt="dashboard" className="w-7" />
                  <span class="ml-3">Profile</span>
                </a>
              </li>
              {/* Stake */}
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={stake} alt="dashboard" className="w-7" />
                  <span class="ml-3">Stake</span>
                </a>
              </li>
              {/* Buy KRSTM */}
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={buy} alt="dashboard" className="w-7" />
                  <span class="ml-3">Buy KRSTM</span>
                </a>
              </li>
              {/* Documentation */}
              <li>
                <button
                  type="button"
                  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <img src={book} alt="book" className="w-7" />

                  <span
                    class="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    Documentation
                  </span>
                  <svg
                    sidebar-toggle-item
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <footer>
            <div className="bg-[#111111] p-3 mb-5 w-full flex justify-center gap-5">
              <img src={telegram} alt="telegram" className="w-8 h-8" />
              <img src={twitter} alt="twitter" className="w-8 h-8" />
              <img src={medium} alt="medium" className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-center">Kristim Ecosystem</h3>
            <span className="text-xs">
              Lorem ipsum dolor sit amet, consectetur.
            </span>
          </footer>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
