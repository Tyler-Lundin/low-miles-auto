import { COMPANY_NAME } from "../../site.config";

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white py-3 font-thin">
            <div className="container mx-auto px-4">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} {COMPANY_NAME}
                </p>
            </div>
            <div className="container mx-auto px-4">
                <p className="text-center">
                    All rights reserved.
                </p>
            </div>
            <CreatorSignature />
        </footer>
    )
}

function CreatorSignature() {
    return (
        <div className="container mx-auto text-center px-4">
            <small className="text-center text-xs text-white">
                <a href="https://www.tylerweb.dev" className="text-amber-500">Created by Tyler Lundin</a>
            </small>
        </div>
    )
}