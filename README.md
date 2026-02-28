# 💼 Freelance Helper - Cotizador Profesional

## Descripción del Proyecto

**Freelance Helper** es una aplicación web inteligente diseñada para ayudar a freelancers creativos a generar presupuestos profesionales de forma rápida y precisa. La herramienta automatiza el cálculo de proyectos considerando múltiples factores como horas de trabajo, tarifa por hora, nivel de urgencia y moneda.

## 🎯 Características Principales

### 1. **Generador de Presupuestos**
- Calcula el costo base multiplicando horas estimadas por precio por hora
- Interfaz intuitiva y fácil de usar
- Resultados en tiempo real

### 2. **Niveles de Urgencia**
- **Normal**: Sin recargo adicional
- **Urgente**: Recargo del 15%
- **Express**: Recargo del 30%

### 3. **Soporte de Múltiples Monedas**
- Peso Argentino (ARS)
- Dólar Estadounidense (USD)
- Euro (EUR)

### 4. **Cálculo Automático de IVA**
- Aplica automáticamente el 19% de IVA al subtotal
- Muestra el presupuesto total a cobrar

### 5. **Desglose Detallado**
- Costo base
- Recargo por urgencia
- Subtotal
- IVA
- Total a cobrar
- Ganancia neta

## 🏗️ Estructura del Proyecto

```
M2L2-homework-main/
├── index.html      # Estructura HTML y formulario
├── script.js       # Lógica de cálculo y funcionalidad
├── styles.css      # Estilos y diseño responsivo
└── README.md       # Este archivo
```

## 📋 Archivos Principales

### **index.html**
Contiene la estructura HTML de la aplicación:
- Formulario de entrada con campos para horas, precio por hora, urgencia y moneda
- Sección de resultados para mostrar el presupuesto desglosado
- Diseño limpio y profesional

### **script.js**
Implementa la lógica de la aplicación:
- `calcularCostoBase()`: Calcula el costo sin recargos
- `aplicarRecargoUrgencia()`: Aplica el porcentaje de recargo según urgencia
- `formatearPresupuesto()`: Formatea el resultado con símbolo de moneda
- `generarPresupuestoCompleto()`: Genera el desglose completo del presupuesto

### **styles.css**
Define el diseño visual:
- Paleta de colores profesional
- Variables CSS personalizables
- Estilos responsivos para dispositivos móviles
- Efectos hover para mejor UX

## 🚀 Cómo Usar

1. **Ingresa las horas estimadas** del proyecto (ej: 8 horas)
2. **Define tu precio por hora** en la moneda deseada (ej: $50)
3. **Selecciona el nivel de urgencia** (Normal, Urgente o Express)
4. **Elige la moneda** (ARS, USD o EUR)
5. **Visualiza el presupuesto desglosado** con todos los valores

## 💡 Ejemplo de Cálculo

```
Horas: 8
Precio por hora: $50
Urgencia: Urgente (+15%)
Moneda: USD

Costo Base: $400
Recargo Urgencia: $60
Subtotal: $460
IVA (19%): $87.40
TOTAL A COBRAR: $547.40
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y moderno
- **JavaScript Vanilla**: Lógica sin dependencias externas

## 📱 Características Técnicas

- ✅ Validación de entrada en tiempo real
- ✅ Formateo automático de moneda
- ✅ Cálculo de IVA incluido
- ✅ Interfaz responsive
- ✅ Código modular y bien documentado

## 👨‍💼 Para Freelancers

Esta herramienta es perfecta para:
- Diseñadores gráficos
- Desarrolladores web
- Consultores
- Agencias digitales
- Cualquier profesional independiente

Simplifica el proceso de cotización y garantiza que nunca subestimes tus servicios.

---

**Versión**: 1.0  
**Última actualización**: 28 de febrero de 2026
