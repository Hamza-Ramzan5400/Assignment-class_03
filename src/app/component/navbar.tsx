
import Link from "next/link"
const Navbar = () => {
  return (
    <div>
    
    <header>

        <ul className="flex gap-2 justify-center items-center h-12 w-full bg-blue-900 text-slate-200">
            <li><Link href='/'>Home</Link></li>
            <li><Link href="##">About</Link></li>
            <li><Link href="##">Products</Link></li>
        </ul>
    </header>

    <div>
        <h1 className="text-center text-red-600 font-bold  ">Random Text</h1>
        <p className="text-wrap text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga aut expedita velit quia alias nihil illum, quibusdam officia tempore sapiente modi reiciendis ut vel ex omnis maiores amet corrupti?
        Itaque repellat qui, dolor nisi rerum quisquam numquam nulla ullam assumenda iusto eaque. Quidem ipsa perferendis eos facilis tenetur, dicta doloremque et ipsum a veniam maiores hic aut officiis excepturi?
        Ad repellat exercitationem quaerat voluptate quisquam harum autem inventore quod expedita maxime, asperiores eaque facilis optio. Maxime pariatur porro, assumenda amet maiores accusamus at, quidem dicta quaerat ad fuga libero!
        Voluptate nisi qui sit quasi quas impedit maxime animi ab accusantium dolorum! Quas debitis sint, possimus veritatis rerum dicta quae, fugiat assumenda odit aperiam, eaque commodi consequatur autem ut ducimus.
        Exercitationem mollitia omnis voluptatum eos, perspiciatis, pariatur at, aliquid explicabo sed soluta ratione! Ratione tempora et commodi, iure, facilis, sed aspernatur sunt unde mollitia dignissimos vero ex totam nobis ad.</p>
    </div>
    </div>
    
  )
}

export default Navbar