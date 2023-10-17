import { Grid, GridItem, Show } from "@chakra-ui/react"
import Details from "./components/Details"
import SideBar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Overview from "./components/Overview"
import ProductSell from "./components/ProductSell"

function App() {

  return (
    <div className="App">
     <Grid
      templateAreas={{
        base: `"nav nav" "main main" "main main"`, 
        lg: `"sidebar nav" "sidebar main" "sidebar main"`}}
      gridTemplateRows={'70px 1fr 30px'}
      gridTemplateColumns={'220px 1fr'}
      bg='ghostwhite'
      gap='5'
    >
      <GridItem bg='ghostwhite' area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem bg='purple.700' area={'sidebar'}>
        <SideBar />
      </GridItem>
      </Show>
      <GridItem bg='ghostwhite' area={'main'}>
        <Details />
        <Overview />
        <ProductSell />
      </GridItem>
    </Grid>
    </div>
  )
}

export default App
