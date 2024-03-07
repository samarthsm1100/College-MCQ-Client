import { Button } from "@nextui-org/react"

const PsDomain : React.FC = ( {domain} ) : JSX.Element => {
    return (
        <div>
            <img src={domain.image_url} alt="domainImg" className="" />
            <p>Name: <span>{domain.name}</span></p>
            <div className="flex ml-auto pr-4 gap-4">
                <Button className="justify-right text-md font-semibold text-purple-900 hover:bg-purple-800 hover:text-white" variant="bordered">Add Questions</Button>
                <Button className="justify-right text-md font-semibold text-purple-900 hover:bg-purple-800 hover:text-white" variant="bordered">Delete Domain</Button>
            </div>
        </div>
    )
}

export default PsDomain
