import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MainHeader = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                ENTER<span className="text-yellow-400">14</span>
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-medium">Сервисный центр</div>
                <div className="text-xs">и комиссионный магазин</div>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">Компьютеры</a>
            <a href="/laptops" className="text-gray-700 hover:text-blue-600 font-medium">Ноутбуки</a>
            <a href="/components" className="text-gray-700 hover:text-blue-600 font-medium">Комплектующие</a>
            <a href="/recycling" className="text-gray-700 hover:text-blue-600 font-medium">Выкуп техники</a>
            <a href="/3d-printing" className="text-gray-700 hover:text-blue-600 font-medium">3D печать</a>
            <a href="/repair" className="text-gray-700 hover:text-blue-600 font-medium">Ремонт</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;