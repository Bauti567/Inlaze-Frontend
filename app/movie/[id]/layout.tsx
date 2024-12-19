import { FavoritesProvider } from '@/app/context/favorite-context';

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
