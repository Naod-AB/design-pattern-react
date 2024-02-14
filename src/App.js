// import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
// import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';
function App() {
	return (

// Generic resource loader

<>
		<ResourceLoader resourceUrl="/users/123" resourceName="user">
			<UserInfo />
		</ResourceLoader>
		<ResourceLoader resourceUrl="/products/1234" resourceName="product">
			<ProductInfo />
		</ResourceLoader>
		</>

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
