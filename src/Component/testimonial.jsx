import T1 from "../assets/deku.jpg"
import T2 from "../assets/killua.jpg"
import T3 from "../assets/luffy.jpg"
import T4 from "../assets/zoro.jpg"


export default function Testimonial() {
  return (
    <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row">
      <div className="relative rounded-xl overflow-auto p-16 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md max-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-40 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400:">
                Assistant Manager
              </div>
            </div>
          </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-16 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md max-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-36 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400:">
                Assistant Manager
              </div>
            </div>
          </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-16 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md max-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-36 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400:">
                Assistant Manager
              </div>
            </div>
          </div>

      </div>
      <div className="relative rounded-xl overflow-auto p-16 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md max-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img src={T4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-40 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                Name Goes here
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400:">
                Assistant Manager
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}
