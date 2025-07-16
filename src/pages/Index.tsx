import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-techBlue" size={32} />
              <h1 className="text-2xl font-bold text-accentGray">TechStore</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-accentGray hover:text-techBlue transition-colors">Главная</a>
              <a href="#catalog" className="text-accentGray hover:text-techBlue transition-colors">Каталог</a>
              <a href="#repair" className="text-accentGray hover:text-techBlue transition-colors">Услуги ремонта</a>
              <a href="#contact" className="text-accentGray hover:text-techBlue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-techBlue hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-accentGray mb-6">
            Компьютерная техника
            <br />
            <span className="text-techBlue">нового поколения</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Продажа современной техники и профессиональный ремонт смартфонов, ноутбуков и планшетов с гарантией качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-techBlue hover:bg-blue-700">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Каталог товаров
            </Button>
            <Button size="lg" variant="outline" className="border-techBlue text-techBlue hover:bg-techBlue hover:text-white">
              <Icon name="Wrench" size={20} className="mr-2" />
              Заказать ремонт
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="pt-6">
                <div className="bg-techBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-techBlue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Экспресс-ремонт</h3>
                <p className="text-gray-600">Быстрый ремонт за 30 минут для большинства неисправностей</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="pt-6">
                <div className="bg-techGreen/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-techGreen" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">Официальная гарантия на все работы и запчасти до 1 года</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="pt-6">
                <div className="bg-techPurple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="text-techPurple" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Диагностика</h3>
                <p className="text-gray-600">Бесплатная диагностика неисправностей за 15 минут</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-accentGray mb-12">Популярные товары</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/img/9ca558a4-ccc4-4564-a64f-f0ef3edf3c33.jpg" 
                  alt="Смартфоны" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Смартфоны
                  <Badge variant="secondary" className="bg-techBlue/10 text-techBlue">ТОП</Badge>
                </CardTitle>
                <CardDescription>Новейшие модели от ведущих производителей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-techBlue">от 15 000₽</span>
                  <Button size="sm" className="bg-techBlue hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/img/59365b21-cde8-4320-a182-81b959f8c8ad.jpg" 
                  alt="Ноутбуки" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Ноутбуки
                  <Badge variant="secondary" className="bg-techGreen/10 text-techGreen">НОВИНКИ</Badge>
                </CardTitle>
                <CardDescription>Мощные устройства для работы и игр</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-techBlue">от 45 000₽</span>
                  <Button size="sm" className="bg-techBlue hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/img/82a2f8b5-e1f9-4201-8aa2-d1faebdd2302.jpg" 
                  alt="Планшеты" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Планшеты
                  <Badge variant="secondary" className="bg-techPurple/10 text-techPurple">СКИДКА</Badge>
                </CardTitle>
                <CardDescription>Идеальны для творчества и развлечений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-techBlue">от 25 000₽</span>
                  <Button size="sm" className="bg-techBlue hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
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