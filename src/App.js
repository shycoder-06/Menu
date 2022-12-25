import logo from './logo.svg';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">

      </section>
    </main>
  );
}

export default App;
