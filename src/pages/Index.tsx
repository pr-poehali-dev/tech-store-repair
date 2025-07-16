import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Icon name="Phone" size={16} />
                +7 (4112) 50-14-14
              </a>
              <span>•</span>
              <span className="text-green-600 font-medium">Бесплатная доставка по Якутску</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Icon name="Clock" size={16} className="inline mr-1" />
                Пн-Пт: 10:00-20:00
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Icon name="MapPin" size={16} className="inline mr-1" />
                г. Якутск
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
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
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Компьютеры</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Комплектующие</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Мониторы</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Периферия</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Ремонт</a>
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ремонт <span className="text-yellow-400">телефонов</span> и компьютеров
              </h1>
              <p className="text-xl mb-6">
                Сервисный центр по ремонту телефонов и компьютеров и комиссионный магазин компьютерной техники в Якутске
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
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Каталог компьютеров
                </Button>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  <Icon name="Printer" size={20} className="mr-2" />
                  3D печать
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/img/b1736ce1-e426-4f62-8b1f-d6c371ee93b7.jpg" 
                  alt="Техника для ремонта" 
                  className="w-full max-w-lg rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <img 
                    src="https://cdn.poehali.dev/files/c5c51c20-72c1-4808-b614-f514c287a63b.jpeg" 
                    alt="STL 3D визитка" 
                    className="w-24 h-auto rounded opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-bold mb-2">Выкуп телефонов</h3>
                <p className="text-sm text-gray-600">Купим ваш телефон по хорошей цене</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="HardDrive" className="text-green-600" size={32} />
                </div>
                <h3 className="font-bold mb-2">Выкуп комплектующих</h3>
                <p className="text-sm text-gray-600">Принимаем видеокарты, процессоры, память</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gamepad2" className="text-purple-600" size={32} />
                </div>
                <h3 className="font-bold mb-2">Ремонт игровых приставок</h3>
                <p className="text-sm text-gray-600">PlayStation, Xbox, Nintendo Switch</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные товары</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
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
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
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
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
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
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-yellow-400">
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
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold">
                    <Icon name="Printer" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section id="repair" className="py-20 px-4 bg-gradient-to-r from-accentGray to-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги ремонта</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" className="text-techBlue" size={24} />
                  <CardTitle>Ремонт смартфонов</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Замена экрана и тачскрина</li>
                  <li>• Ремонт материнской платы</li>
                  <li>• Замена аккумулятора</li>
                  <li>• Восстановление после воды</li>
                </ul>
                <div className="mt-4">
                  <span className="text-techBlue font-semibold">от 1 500₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Laptop" className="text-techGreen" size={24} />
                  <CardTitle>Ремонт ноутбуков</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Чистка от пыли и замена термопасты</li>
                  <li>• Замена клавиатуры</li>
                  <li>• Ремонт системы охлаждения</li>
                  <li>• Восстановление ПО</li>
                </ul>
                <div className="mt-4">
                  <span className="text-techGreen font-semibold">от 2 000₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Tablet" className="text-techPurple" size={24} />
                  <CardTitle>Ремонт планшетов</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Замена сенсорного экрана</li>
                  <li>• Ремонт разъемов</li>
                  <li>• Замена динамиков</li>
                  <li>• Прошивка устройства</li>
                </ul>
                <div className="mt-4">
                  <span className="text-techPurple font-semibold">от 1 800₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-accentGray mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-techBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-techBlue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">ул. Технологическая, д. 1<br />Москва, 101000</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-techGreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-techGreen" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67<br />Работаем 24/7</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-techPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-techPurple" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@techstore.ru<br />support@techstore.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accentGray text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-techBlue" size={24} />
                <h3 className="text-xl font-bold">TechStore</h3>
              </div>
              <p className="text-gray-400">Ваш надежный партнер в мире технологий</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Смартфоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Планшеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ремонт телефонов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт ноутбуков</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Диагностика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Twitter" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;