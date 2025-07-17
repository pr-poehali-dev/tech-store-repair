import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RepairServices = () => {
  return (
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
  );
};

export default RepairServices;