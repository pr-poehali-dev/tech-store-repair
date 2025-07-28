import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface RepairCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const RepairCalculator: React.FC<RepairCalculatorProps> = ({ isOpen, onClose }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedRepair, setSelectedRepair] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState('');

  const brands = [
    { name: 'iPhone', models: [
      'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 
      'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 15+',
      'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
      'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13 mini', 'iPhone 13',
      'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 mini',
      'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
      'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X',
      'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7',
      'iPhone 6s Plus', 'iPhone 6s', 'iPhone 6 Plus', 'iPhone 6', 'iPhone 5s'
    ]},
    { name: 'Samsung', models: ['Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S22', 'Galaxy A54', 'Galaxy A34', 'Galaxy A24', 'Galaxy A14'] },
    { name: 'Xiaomi', models: ['Xiaomi 13 Pro', 'Xiaomi 13', 'Xiaomi 12', 'Mi 11', 'Mi 10T Pro'] },
    { name: 'Redmi', models: ['Redmi Note 12 Pro', 'Redmi Note 12', 'Redmi Note 11', 'Redmi 12C', 'Redmi 10A', 'Redmi 9A'] },
    { name: 'POCO', models: ['POCO X5 Pro', 'POCO X4 Pro', 'POCO F4', 'POCO M5', 'POCO C40'] },
    { name: 'Realme', models: ['Realme GT 2 Pro', 'Realme 10 Pro+', 'Realme 9 Pro+', 'Realme C55', 'Realme C35', 'Realme C33'] },
    { name: 'Infinix', models: ['Infinix Note 12', 'Infinix Hot 20', 'Infinix Smart 7', 'Infinix Zero 20', 'Infinix Hot 12'] },
    { name: 'Tecno', models: ['Tecno Spark 10', 'Tecno Camon 20', 'Tecno Pova 4', 'Tecno Pop 7', 'Tecno Phantom X2'] },
    { name: 'Huawei', models: ['P50 Pro', 'P40 Pro', 'Nova 9', 'Y6p', 'Y5p', 'Honor 50', 'Honor 70', 'Honor Magic 4'] }
  ];

  const repairTypes = [
    { name: 'Диагностика', price: 300 },
    { name: 'Замена батареи', price: 3500 },
    { name: 'Ремонт разъема зарядки', price: 1800 },
    { name: 'Замена динамика/микрофона', price: 1000 },
    { name: 'Замена кнопок', price: 1200 },
    { name: 'Замена камеры', price: 2500 },
    { name: 'Замена заднего стекла', price: 2000 },
    { name: 'Ремонт после воды', price: 2000 },
    { name: 'Перепрошивка', price: 1500 }
  ];

  const screenPrices = {
    'iPhone': {
      'iPhone 16 Pro Max': { replacement: 9500, backGlass: 7500 },
      'iPhone 16 Pro': { replacement: 9000, backGlass: 7000 },
      'iPhone 16': { replacement: 9000, backGlass: 7000 },
      'iPhone 15 Pro Max': { replacement: 9000, backGlass: 7000 },
      'iPhone 15 Pro': { replacement: 8500, backGlass: 6500 },
      'iPhone 15': { replacement: 8000, backGlass: 6000 },
      'iPhone 15+': { replacement: 8000, backGlass: 6000 },
      'iPhone 14 Pro Max': { replacement: 8500, backGlass: 6500 },
      'iPhone 14 Pro': { replacement: 8000, backGlass: 6000 },
      'iPhone 14 Plus': { replacement: 8000, backGlass: 6000 },
      'iPhone 14': { replacement: 7500, backGlass: 5500 },
      'iPhone 13 Pro Max': { replacement: 7000, backGlass: 5000 },
      'iPhone 13 Pro': { replacement: 6800, backGlass: 4800 },
      'iPhone 13 mini': { replacement: 6000, backGlass: 4000 },
      'iPhone 13': { replacement: 6000, backGlass: 4000 },
      'iPhone 12 Pro Max': { replacement: 6500, backGlass: 4500 },
      'iPhone 12 Pro': { replacement: 6000, backGlass: 4000 },
      'iPhone 12': { replacement: 5800, backGlass: 3800 },
      'iPhone 12 mini': { replacement: 5500, backGlass: 3500 },
      'iPhone 11 Pro Max': { replacement: 6000, backGlass: 4000 },
      'iPhone 11 Pro': { replacement: 5500, backGlass: 3500 },
      'iPhone 11': { replacement: 5000, backGlass: 3000 },
      'iPhone XS Max': { replacement: 4800, backGlass: 2800 },
      'iPhone XS': { replacement: 4500, backGlass: 2500 },
      'iPhone XR': { replacement: 4500, backGlass: 2500 },
      'iPhone X': { replacement: 4500, backGlass: 2500 },
      'iPhone 8 Plus': { replacement: 4200, backGlass: 2200 },
      'iPhone 8': { replacement: 4000, backGlass: 2000 },
      'iPhone 7 Plus': { replacement: 3500, backGlass: 0 },
      'iPhone 7': { replacement: 3500, backGlass: 0 },
      'iPhone 6s Plus': { replacement: 3500, backGlass: 0 },
      'iPhone 6s': { replacement: 3200, backGlass: 0 },
      'iPhone 6 Plus': { replacement: 3500, backGlass: 0 },
      'iPhone 6': { replacement: 3200, backGlass: 0 },
      'iPhone 5s': { replacement: 2500, backGlass: 0 }
    },
    'Samsung': {
      'Galaxy S23 Ultra': { glass: 3800, display: 7200 },
      'Galaxy S23+': { glass: 3400, display: 6500 },
      'Galaxy S23': { glass: 3200, display: 6100 },
      'Galaxy S22': { glass: 2900, display: 5400 },
      'Galaxy A54': { glass: 2200, display: 3800 },
      'Galaxy A34': { glass: 1900, display: 3200 },
      'Galaxy A24': { glass: 1600, display: 2800 },
      'Galaxy A14': { glass: 1400, display: 2500 }
    },
    'Xiaomi': {
      'Xiaomi 13 Pro': { glass: 2800, display: 4900 },
      'Xiaomi 13': { glass: 2500, display: 4300 },
      'Xiaomi 12': { glass: 2400, display: 4200 },
      'Mi 11': { glass: 2200, display: 3800 },
      'Mi 10T Pro': { glass: 2000, display: 3500 }
    },
    'Redmi': {
      'Redmi Note 12 Pro': { glass: 1800, display: 3200 },
      'Redmi Note 12': { glass: 1600, display: 2900 },
      'Redmi Note 11': { glass: 1500, display: 2600 },
      'Redmi 12C': { glass: 1200, display: 2100 },
      'Redmi 10A': { glass: 1100, display: 1900 },
      'Redmi 9A': { glass: 1000, display: 1800 }
    },
    'POCO': {
      'POCO X5 Pro': { glass: 1600, display: 2900 },
      'POCO X4 Pro': { glass: 1500, display: 2700 },
      'POCO F4': { glass: 1800, display: 3100 },
      'POCO M5': { glass: 1300, display: 2300 },
      'POCO C40': { glass: 1100, display: 1900 }
    },
    'Realme': {
      'Realme GT 2 Pro': { glass: 2200, display: 3900 },
      'Realme 10 Pro+': { glass: 1900, display: 3400 },
      'Realme 9 Pro+': { glass: 1700, display: 3000 },
      'Realme C55': { glass: 1400, display: 2400 },
      'Realme C35': { glass: 1300, display: 2200 },
      'Realme C33': { glass: 1200, display: 2000 }
    },
    'Infinix': {
      'Infinix Note 12': { glass: 1500, display: 2600 },
      'Infinix Hot 20': { glass: 1300, display: 2200 },
      'Infinix Smart 7': { glass: 1100, display: 1900 },
      'Infinix Zero 20': { glass: 1800, display: 3200 },
      'Infinix Hot 12': { glass: 1200, display: 2100 }
    },
    'Tecno': {
      'Tecno Spark 10': { glass: 1200, display: 2100 },
      'Tecno Camon 20': { glass: 1600, display: 2800 },
      'Tecno Pova 4': { glass: 1400, display: 2500 },
      'Tecno Pop 7': { glass: 1000, display: 1800 },
      'Tecno Phantom X2': { glass: 2000, display: 3500 }
    },
    'Huawei': {
      'P50 Pro': { glass: 3200, display: 5800 },
      'P40 Pro': { glass: 2800, display: 4900 },
      'Nova 9': { glass: 2200, display: 3800 },
      'Y6p': { glass: 1400, display: 2400 },
      'Y5p': { glass: 1200, display: 2100 },
      'Honor 50': { glass: 2000, display: 3500 },
      'Honor 70': { glass: 2300, display: 4000 },
      'Honor Magic 4': { glass: 2600, display: 4500 }
    }
  };

  const calculatePrice = () => {
    if (!selectedBrand || !selectedModel || !selectedRepair) {
      setCalculatedPrice('Выберите все параметры');
      return;
    }

    const repairType = repairTypes.find(r => r.name === selectedRepair);
    let totalPrice = repairType?.price || 0;
    let priceBreakdown = `Работа: ${totalPrice}₽`;

    if (selectedRepair === 'Замена экрана' || selectedRepair === 'Замена заднего стекла') {
      const brandPrices = screenPrices[selectedBrand as keyof typeof screenPrices];
      if (brandPrices && brandPrices[selectedModel as keyof typeof brandPrices]) {
        const modelPrices = brandPrices[selectedModel as keyof typeof brandPrices];
        const screenType = selectedRepair === 'Замена заднего стекла' ? 'backGlass' : 'replacement';
        const screenPrice = modelPrices[screenType as keyof typeof modelPrices];
        if (screenPrice > 0) {
          totalPrice += screenPrice;
          priceBreakdown += `\nЗапчасть: ${screenPrice}₽`;
        }
      }
    }

    setCalculatedPrice(`${priceBreakdown}\n\nИтого: ${totalPrice}₽`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-gray-900">
              Калькулятор стоимости ремонта
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Brand Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Выберите бренд телефона
            </label>
            <div className="grid grid-cols-3 gap-2">
              {brands.map((brand) => (
                <Button
                  key={brand.name}
                  variant={selectedBrand === brand.name ? "default" : "outline"}
                  className="h-12"
                  onClick={() => {
                    setSelectedBrand(brand.name);
                    setSelectedModel('');
                    setCalculatedPrice('');
                  }}
                >
                  {brand.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Model Selection */}
          {selectedBrand && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Выберите модель
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                {brands.find(b => b.name === selectedBrand)?.models.map((model) => (
                  <Button
                    key={model}
                    variant={selectedModel === model ? "default" : "outline"}
                    className="h-10 text-left justify-start"
                    onClick={() => {
                      setSelectedModel(model);
                      setCalculatedPrice('');
                    }}
                  >
                    {model}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Repair Type Selection */}
          {selectedModel && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Выберите тип ремонта
              </label>
              <div className="space-y-2">
                {repairTypes.map((repair) => (
                  <Button
                    key={repair.name}
                    variant={selectedRepair === repair.name ? "default" : "outline"}
                    className="w-full h-12 text-left justify-between"
                    onClick={() => {
                      setSelectedRepair(repair.name);
                      setCalculatedPrice('');
                    }}
                  >
                    <span>{repair.name}</span>
                    <span className="font-bold">от {repair.price}₽</span>
                  </Button>
                ))}
                
                {/* Screen repair options */}
                {selectedBrand === 'iPhone' && screenPrices[selectedBrand as keyof typeof screenPrices] && 
                 screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]] && (
                  <>
                    <Button
                      variant={selectedRepair === 'Замена экрана' ? "default" : "outline"}
                      className="w-full h-12 text-left justify-between"
                      onClick={() => {
                        setSelectedRepair('Замена экрана');
                        setCalculatedPrice('');
                      }}
                    >
                      <span>Замена экрана</span>
                      <span className="font-bold text-blue-600">
                        {screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]].replacement}₽
                      </span>
                    </Button>
                    {screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]].backGlass > 0 && (
                      <Button
                        variant={selectedRepair === 'Замена заднего стекла' ? "default" : "outline"}
                        className="w-full h-12 text-left justify-between"
                        onClick={() => {
                          setSelectedRepair('Замена заднего стекла');
                          setCalculatedPrice('');
                        }}
                      >
                        <span>Замена заднего стекла</span>
                        <span className="font-bold text-purple-600">
                          {screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]].backGlass}₽
                        </span>
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Calculate Button */}
          {selectedBrand && selectedModel && selectedRepair && (
            <Button 
              className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold"
              onClick={calculatePrice}
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          )}

          {/* Result */}
          {calculatedPrice && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                Предварительная стоимость:
              </h3>
              <div className="text-green-700 whitespace-pre-line">
                {calculatedPrice}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <div className="flex items-start">
                  <Icon name="AlertTriangle" size={16} className="text-yellow-600 mr-2 mt-0.5" />
                  <p className="text-xs text-yellow-700">
                    <strong>Важно:</strong> Это предварительная оценка. Точная стоимость определяется после диагностики устройства.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('tel:89241617699')}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/79241617699?text=Здравствуйте! Хочу записаться на ремонт телефона')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RepairCalculator;