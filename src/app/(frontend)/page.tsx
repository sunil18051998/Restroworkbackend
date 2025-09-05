import { redirect } from 'next/navigation';

export default function RootHome() {
  // Option 1: Redirect to default locale
  redirect('/en');


  // Option 2: Show generic homepage (remove redirect above)
  // return <div>Welcome to ShopSmart! Please select your language.</div>;
}