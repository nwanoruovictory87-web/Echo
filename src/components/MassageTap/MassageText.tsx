//*=============== echo types
type EchoNumber = {
  number?: string;
};
type ChatType = object[];
type ChatData = {
  type: string;
  from?: string;
  massage: string;
  url: string;
};

//*=============== get user number
const ECHO_Number = "Echo_Number";
const userValue: EchoNumber = JSON.parse(localStorage.getItem(ECHO_Number));
const userNumber = userValue ? userValue.number : null;

function MassageText(props: { body: ChatType }) {
  const chat: ChatType = props.body;
  return (
    <div className="flex flex-col gap-2">
      {chat &&
        chat.map((e: ChatData, i: number) => {
          const image = e.url;
          if (e.from !== userNumber && e.type === "text") {
            return (
              <span
                className="block w-fit max-w-[190px] h-fit bg-blue-500 p-3 pl-6 pr-6 rounded-bl-[30px] rounded-e-3xl overflow-hidden"
                key={i}
              >
                <h5 className="text-white text-xl font-serif break-words">
                  {e.massage}
                </h5>
              </span>
            );
          } else if (e.type === "image") {
            if (e.from === userNumber) {
              return (
                <span
                  className="ml-auto block w-fit h-38 max-w-[190px] max-h-38 overflow-hidden"
                  key={i}
                >
                  <img
                    src={image}
                    className="w-[190px] h-38 rounded-xl"
                    alt="image"
                  ></img>
                </span>
              );
            } else if (e.from !== userNumber) {
              return (
                <span
                  className="block w-fit h-38 max-w-[190px] max-h-38 overflow-hidden"
                  key={i}
                >
                  <img
                    src={image}
                    className="w-[190px] h-38 rounded-xl"
                    alt="image"
                  ></img>
                </span>
              );
            }
          } else if (e.type === "mixed") {
            if (e.from === userNumber) {
              return (
                <>
                  <span
                    className="ml-auto block w-fit h-38 max-w-[190px] max-h-38 overflow-hidden"
                    key={i}
                  >
                    <img
                      src={image}
                      className="w-[190px] h-38 rounded-xl"
                      alt="image"
                    ></img>
                  </span>
                  <span
                    className="ml-auto block w-fit max-w-[190px] h-fit bg-white p-3 pl-6 pr-6 rounded-br-[30px] rounded-s-3xl overflow-hidden"
                    key={i + 1}
                  >
                    <h5 className="text-black text-xl font-serif break-words">
                      {e.massage}
                    </h5>
                  </span>
                </>
              );
            } else {
              return (
                <>
                  <span
                    className="block w-fit h-38 max-w-[190px] max-h-38 overflow-hidden"
                    key={i}
                  >
                    <img
                      src={image}
                      className="w-[190px] h-38 rounded-xl"
                      alt="image"
                    ></img>
                  </span>
                  <span
                    className="block w-fit max-w-[190px] h-fit bg-blue-500 p-3 pl-6 pr-6 rounded-bl-[30px] rounded-e-3xl overflow-hidden"
                    key={i + 1}
                  >
                    <h5 className="text-white text-xl font-serif break-words">
                      {e.massage}
                    </h5>
                  </span>
                </>
              );
            }
          } else if (e.from === userNumber) {
            if (e.type === "text") {
              return (
                <span
                  className="ml-auto block w-fit max-w-[190px] h-fit bg-white p-3 pl-6 pr-6 rounded-br-[30px] rounded-s-3xl overflow-hidden"
                  key={i}
                >
                  <h5 className="text-black text-xl font-serif break-words">
                    {e.massage}
                  </h5>
                </span>
              );
            }
          }
        })}
    </div>
  );
}
export default MassageText;
