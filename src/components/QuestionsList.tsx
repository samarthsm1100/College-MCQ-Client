export default function QuestionsList({arr}:{arr:number[]}) {
  return (
    <div className="h-screen overflow-y-scroll w-fit px-2 bg-slate-200">
      <ul>
        {arr.map((i:number)=>{
          return <li className="relative" key={i}>
                <button className="rounded-full my-3 p-4 w-full h-full px-6 text-xl border-2 border-slate-500">{i}</button>
            </li>
        })}
      </ul>
    </div>
  )
}
