import ProjectImg from "../assets/minion.jpg";
import ProjectImg1 from "../assets/minion1.jpg";
import ProjectImg2 from "../assets/minion2.jpg";
import ProjectImg3 from "../assets/minion3.jpg";

export default function project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Project</h1>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Developer
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cupiditate minima aliquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5 rounded">
                  <img src={ProjectImg} alt="minion" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
              <div className="md:shrink-0 p-5 rounded">
                  <img src={ProjectImg1} alt="minion1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Brother Minion
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cupiditate minima aliquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Villai Minion
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cupiditate minima aliquam?
                  </p>
                </div>
                <div className="md:shrink-0 p-5 rounded">
                  <img src={ProjectImg2} alt="minion2" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
              <div className="md:shrink-0 p-5 rounded">
                  <img src={ProjectImg3} alt="minion3" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Child Minion
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cupiditate minima aliquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
