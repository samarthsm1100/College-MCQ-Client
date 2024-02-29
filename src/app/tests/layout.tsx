import DropDown from "@/components/DropDown"
import { Button } from "@nextui-org/react"

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <nav className="flex px-2 justify-between my-3">
        <DropDown />
        <Button color="success">Submit</Button>
      </nav>
        <div>
            {children}
        </div>
    </div>
  )
}
