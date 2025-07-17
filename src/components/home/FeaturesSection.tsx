import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;