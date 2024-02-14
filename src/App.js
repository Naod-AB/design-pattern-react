// import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
// import { UserLoader } from './UserLoader';
// import { ResourceLoader } from './ResourceLoader';
// import { ProductInfo } from './ProductInfo';
import { DataSource} from './DataSource';
import axios from 'axios';


const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}



function App() {
	return (

//Getting data from data source
		<>
		<DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
			<UserInfo />
		</DataSource>
		</>
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
