import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ремонт <span className="text-yellow-400">телефонов</span>, компьютеров и игровых приставок
            </h1>
            <p className="text-xl mb-6">
              Сервисный центр по ремонту телефонов, компьютеров и игровых приставок. Комиссионный магазин компьютерной техники в Якутске
            </p>
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-lg p-4 mb-8 max-w-md mx-auto lg:mx-0 border-2 border-yellow-400 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Icon name="Printer" className="text-yellow-400" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-black text-xl">STL 3D</h3>
                  <p className="text-sm text-gray-800">Фирма по изготовлению 3D печати</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => window.location.href = '/catalog'}>
                <Icon name="Zap" size={20} className="mr-2" />
                Каталог компьютеров
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" onClick={() => window.location.href = '/laptops'}>
                <Icon name="Laptop" size={20} className="mr-2" />
                Ноутбуки
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" onClick={() => window.location.href = '/3d-printing'}>
                <Icon name="Printer" size={20} className="mr-2" />
                3D печать
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/img/b1736ce1-e426-4f62-8b1f-d6c371ee93b7.jpg" 
              alt="Техника для ремонта" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;