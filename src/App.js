// import { SplitScreen } from './SplitScreen';
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
import { people } from "./people/people";

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
		<RegularList
			items={people}
			resourceName="person"
			itemComponent={SmallPersonListItem} />
		<RegularList
			items={people}
			resourceName="person"
			itemComponent={LargePersonListItem} />
		</>

//1. Split Screen implementation
		// <SplitScreen leftWeight={1} rightWeight={3}>
		// 	<LeftHandComponent name="World" />
		// 	<RightHandComponent message="Hello" />
		// </SplitScreen>
	);
}

export default App;
