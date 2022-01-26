import { useRouter } from "next/router";
import Link from "next/link";
const CofeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Hello {router.query.id}</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};
export default CofeeStore;
