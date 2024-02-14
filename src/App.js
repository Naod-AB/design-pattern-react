// import { CurrentUserLoader } from './CurrentUserLoader';
// import { UserInfo } from './UserInfo';
// import { UserLoader } from './UserLoader';
// import { ResourceLoader } from './ResourceLoader';
// import { ProductInfo } from './ProductInfo';
// import { DataSource} from './DataSource';
// import axios from 'axios';
import { UncontrolledForm } from "./UncontrolledForm";

// for getting data from local storage
// const getServerData = url => async () => {
// 	const response = await axios.get(url);
// 	return response.data;
// }

// const getLocalStorageData = key => () => {
// 	return localStorage.getItem(key);
// }

// const Text = ({ message }) => <h1>{message}</h1>;


function App() {
	return (
//Uncontrolled form
<UncontrolledForm />


//3. Getting data from data source
		// <>
		// <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
		// 	<UserInfo />
		// </DataSource>

		// <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
		// 	<Text />
		// </DataSource>
		// </>
// Generic resource loader

/* <>
		<ResourceLoader resourceUrl="/users/123" resourceName="user">
			<UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/1234" resourceName="product">
			<ProductInfo />
		</ResourceLoader>
		</> */

// Loading current user
/* <>
		<UserLoader userId="123">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="234">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="345">
			<UserInfo />
		</UserLoader>

		current user loader
		<CurrentUserLoader>
			<UserInfo />
		</CurrentUserLoader>
		</>*/
	);
}

export default App;
