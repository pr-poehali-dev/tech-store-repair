import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные товары</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer" onClick={() => navigate('/catalog')}>
            <div className="aspect-square bg-white flex items-center justify-center p-8">
              <img 
                src="/img/59365b21-cde8-4320-a182-81b959f8c8ad.jpg" 
                alt="Игровой компьютер" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Игровой ПК GTX 1660
                <Badge className="bg-red-500 text-white">ХИТ</Badge>
              </CardTitle>
              <CardDescription>
                Intel Core i5 / GTX 1660 / 16GB RAM / SSD 512GB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">65 000₽</span>
                  <div className="text-sm text-gray-500 line-through">75 000₽</div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={(e) => { e.stopPropagation(); navigate('/catalog'); }}>
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer" onClick={() => navigate('/catalog')}>
            <div className="aspect-square bg-white flex items-center justify-center p-8">
              <img 
                src="/img/9ca558a4-ccc4-4564-a64f-f0ef3edf3c33.jpg" 
                alt="Офисный компьютер" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Офисный ПК Ryzen 5
                <Badge variant="secondary">НОВИНКА</Badge>
              </CardTitle>
              <CardDescription>
                AMD Ryzen 5 / 8GB RAM / SSD 256GB / Встроенная графика
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">35 000₽</span>
                  <div className="text-sm text-gray-500 line-through">42 000₽</div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={(e) => { e.stopPropagation(); navigate('/catalog'); }}>
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer" onClick={() => navigate('/components')}>
            <div className="aspect-square bg-white flex items-center justify-center p-8">
              <img 
                src="/img/82a2f8b5-e1f9-4201-8aa2-d1faebdd2302.jpg" 
                alt="Мониторы" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Монитор 27" IPS
                <Badge className="bg-green-500 text-white">СКИДКА</Badge>
              </CardTitle>
              <CardDescription>
                27 дюймов / Full HD / IPS матрица / 75Hz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">18 000₽</span>
                  <div className="text-sm text-gray-500 line-through">25 000₽</div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={(e) => { e.stopPropagation(); navigate('/components'); }}>
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow group bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-yellow-400 cursor-pointer" onClick={() => navigate('/3d-printing')}>
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center p-8">
              <img 
                src="/img/51a8b219-d1b5-4def-9ff9-30db2b6e1997.jpg" 
                alt="3D печать" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                3D печать STL
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold">3D</Badge>
              </CardTitle>
              <CardDescription>
                Изготовление любых моделей по чертежам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-amber-600">от 500₽</span>
                  <div className="text-sm text-gray-500">за изделие</div>
                </div>
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold" onClick={(e) => { e.stopPropagation(); navigate('/3d-printing'); }}>
                  <Icon name="Printer" size={16} className="mr-2" />
                  Заказать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;