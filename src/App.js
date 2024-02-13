// import { SplitScreen } from './SplitScreen';
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { RegularList } from "./RegularList";
import { NumberedList } from "./NumberedList";
import { people } from "./people/people";
import { products} from "./products/product";
import { Modal } from "./Modal";

//1. Split Screen implementation
// const LeftHandComponent = ({ name }) => {
// 	return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
// }

// const RightHandComponent = ({ message }) => {
// 	return <p style={{ backgroundColor: 'red' }}>{message}!</p>;
// }




function App() {
	return (

		<>
		<Modal>
			<LargeProductListItem product={products[0]} />
		</Modal>
		</>
		//2. regular and numbered list
    // <>
	// 	<RegularList
	// 		items={people}
	// 		resourceName="person"
	// 		itemComponent={SmallPersonListItem} />
	// 	<NumberedList
	// 		items={people}
	// 		resourceName="person"
	// 		itemComponent={LargePersonListItem} />
	// 	<RegularList
	// 		items={products}
	// 		resourceName="product"
	// 		itemComponent={SmallProductListItem} />
	// 	<NumberedList
	// 		items={products}
	// 		resourceName="product"
	// 		itemComponent={LargeProductListItem} />
	// 	</>

//1. Split Screen implementation
		// <SplitScreen leftWeight={1} rightWeight={3}>
		// 	<LeftHandComponent name="World" />
		// 	<RightHandComponent message="Hello" />
		// </SplitScreen>
	);
}

export default App;
