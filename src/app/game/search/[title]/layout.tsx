import { Container, SearchBar } from "@/components";

export default function SearchLayout (
{children}:
{children: Readonly<React.ReactNode>}
) {
   return <main className="w-full text-black">
        <Container>
        <SearchBar/>
        <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base:</h1>
        {children}
        </Container>
  </main>
}