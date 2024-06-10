type GridWrapperType = {
    children: React.ReactNode
}

export const GridWrapper : React.FC<GridWrapperType> = ({children}) => (
    <section 
      className="grid gap-7 sm:grind-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {children}
    </section>
)