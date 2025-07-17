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
    { name: 'iPhone', models: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone XR', 'iPhone X'] },
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
    { name: 'Замена батареи', price: 1500 },
    { name: 'Ремонт разъема зарядки', price: 1800 },
    { name: 'Замена динамика/микрофона', price: 1000 },
    { name: 'Замена кнопок', price: 1200 },
    { name: 'Замена камеры', price: 2500 },
    { name: 'Ремонт после воды', price: 2000 },
    { name: 'Перепрошивка', price: 1500 }
  ];

  const screenPrices = {
    'iPhone': {
      'iPhone 14 Pro Max': { glass: 4500, display: 8500 },
      'iPhone 14 Pro': { glass: 4200, display: 7800 },
      'iPhone 14': { glass: 3800, display: 6500 },
      'iPhone 13 Pro': { glass: 3800, display: 6900 },
      'iPhone 13': { glass: 3400, display: 5800 },
      'iPhone 12': { glass: 3200, display: 5500 },
      'iPhone 11': { glass: 2800, display: 4800 },
      'iPhone XR': { glass: 2400, display: 4200 },
      'iPhone X': { glass: 2200, display: 3900 }
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

    if (selectedRepair === 'Замена экрана (стекло)' || selectedRepair === 'Замена экрана (дисплей)') {
      const brandPrices = screenPrices[selectedBrand as keyof typeof screenPrices];
      if (brandPrices && brandPrices[selectedModel as keyof typeof brandPrices]) {
        const modelPrices = brandPrices[selectedModel as keyof typeof brandPrices];
        const screenType = selectedRepair.includes('стекло') ? 'glass' : 'display';
        const screenPrice = modelPrices[screenType as keyof typeof modelPrices];
        totalPrice += screenPrice;
        priceBreakdown += `\nЗапчасть: ${screenPrice}₽`;
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
                {selectedBrand && screenPrices[selectedBrand as keyof typeof screenPrices] && 
                 screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]] && (
                  <>
                    <Button
                      variant={selectedRepair === 'Замена экрана (стекло)' ? "default" : "outline"}
                      className="w-full h-12 text-left justify-between"
                      onClick={() => {
                        setSelectedRepair('Замена экрана (стекло)');
                        setCalculatedPrice('');
                      }}
                    >
                      <span>Замена экрана (только стекло)</span>
                      <span className="font-bold text-green-600">
                        {screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]].glass}₽
                      </span>
                    </Button>
                    <Button
                      variant={selectedRepair === 'Замена экрана (дисплей)' ? "default" : "outline"}
                      className="w-full h-12 text-left justify-between"
                      onClick={() => {
                        setSelectedRepair('Замена экрана (дисплей)');
                        setCalculatedPrice('');
                      }}
                    >
                      <span>Замена экрана (дисплей)</span>
                      <span className="font-bold text-blue-600">
                        {screenPrices[selectedBrand as keyof typeof screenPrices][selectedModel as keyof typeof screenPrices[typeof selectedBrand]].display}₽
                      </span>
                    </Button>
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