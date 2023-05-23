export const Footer = () => {
    return (
        <footer class="bg-black text-white">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-3 px-4 bg-white md:flex md:items-center md:justify-center">
                <span class=" bg-white text-black text-md ">© 2023 ecore app. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}