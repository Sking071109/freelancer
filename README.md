# 🚀 Home Challenge: Elige tu Cliente

**Módulo 2 - Lección 2: Arquitectura de Funciones**

---

## 📋 La Situación

Has sido seleccionado por la agencia de desarrollo **"The Bit Masters"** para liderar uno de sus proyectos más importantes. La agencia tiene **tres clientes esperando** y necesitan que elijas uno para trabajar.

**Tu misión:** Construir la lógica desde cero. No hay plantilla, no hay guía paso a paso: **solo tú y tu capacidad de resolver problemas con funciones.**

Este es un proyecto de **desarrollo freelance real**. El cliente espera:
- 💼 **Código profesional** con arquitectura de funciones
- 🎨 **Interfaz pulida** que inspire confianza
- ✅ **Funcionalidad completa** sin errores

---

## 🎯 Elige tu Cliente

### 🟢 **Opción A: "Freelance Helper"**
**Perfil:** Negocios / Emprendimiento

#### 👤 El Cliente:
Una comunidad de **diseñadores gráficos independientes** que no saben cuánto cobrar por sus servicios. Necesitan una herramienta que les ayude a calcular presupuestos de forma profesional.

#### 🎯 Tu Misión:
Crear un **cotizador inteligente** que reciba:
- **Horas estimadas** del proyecto
- **Precio por hora** del freelancer
- **Nivel de urgencia** del pedido (Normal, Urgente, Express)

#### 🔧 Requisitos Técnicos:
Debes separar la lógica en **al menos 3 funciones:**
1. `calcularCostoBase(horas, precioPorHora)` - Costo sin recargos
2. `aplicarRecargoUrgencia(costoBase, urgencia)` - Recargo según urgencia
3. `formatearPresupuesto(costoFinal)` - Formato profesional de dinero

#### ⭐ Diferenciador:
Debe mostrar el **desglose completo:**
- Costo base
- Recargo por urgencia
- IVA (19%)
- **Ganancia neta** (lo que realmente recibirá el freelancer después de impuestos)

#### 💡 Bonus:
- Agregar selector de moneda (COP, USD, EUR)
- Guardar historial de cotizaciones
- Exportar presupuesto como texto

---

### 🔵 **Opción B: "HoopStats Pro"**
**Perfil:** Deportes / Estadísticas

#### 👤 El Cliente:
Un **club local de baloncesto** que quiere digitalizar el seguimiento de sus jugadores. Actualmente usan papel y lápiz, perdiendo tiempo y datos valiosos.

#### 🎯 Tu Misión:
Crear una **calculadora de eficiencia** que reciba:
- **Tiros de 1 punto:** lanzados y anotados
- **Tiros de 2 puntos:** lanzados y anotados
- **Tiros de 3 puntos:** lanzados y anotados

#### 🔧 Requisitos Técnicos:
Crear funciones independientes:
1. `calcularPuntosTotales(anotados1, anotados2, anotados3)` - Total de puntos
2. `calcularEfectividad(totalLanzados, totalAnotados)` - Porcentaje de efectividad
3. `clasificarJugador(efectividad, puntosTotales)` - Retorna el rango del jugador

#### 📊 Rangos del Jugador:
- **Triplista:** +50 puntos y +40% efectividad
- **Anotador:** +30 puntos
- **Efectivo:** +50% efectividad
- **Novato:** Menos de 20 puntos

#### ⭐ Diferenciador:
La app debe **validar lógica:**
- Alertar si los tiros anotados superan a los lanzados
- Mostrar qué tipo de tiro domina el jugador
- Calcular puntos por partido (si ingresas número de partidos)

#### 💡 Bonus:
- Comparar con promedio del equipo
- Gráfico visual de efectividad
- Modo "Entrenador" vs "Jugador"

---

### 🟡 **Opción C: "Eco-Trip Planner"**
**Perfil:** Tecnología / Sostenibilidad

#### 👤 El Cliente:
Una **startup de movilidad sostenible** que vende bicicletas eléctricas. Quieren una herramienta que ayude a sus clientes a planificar rutas sin quedarse sin batería.

#### 🎯 Tu Misión:
Crear una **calculadora de autonomía** que reciba:
- **Kilómetros de la ruta** planeada
- **Carga actual de batería** (porcentaje)
- **Tipo de terreno:** Plano, Subida, Montaña

#### 🔧 Requisitos Técnicos:
Funciones necesarias:
1. `calcularConsumo(km, terreno)` - Consumo de batería según terreno
2. `verificarAutonomia(cargaActual, consumoEstimado)` - ¿Alcanza la batería?
3. `mostrarAdvertencia(carga)` - Alerta si carga < 20%

#### ⚡ Consumo por Terreno:
- **Plano:** 1% batería por km
- **Subida:** 2% batería por km
- **Montaña:** 3% batería por km

#### ⭐ Diferenciador:
Mostrar información útil:
- ¿Alcanza la batería? ✅ / ❌
- **KM de sobra** al llegar al destino
- Sugerencia de ruta alternativa si no alcanza
- Punto de recarga más cercano (simulado)

#### 💡 Bonus:
- Modo "Eco" que reduce consumo en 20%
- Calcular tiempo estimado de viaje
- Mostrar CO₂ ahorrado vs auto

---

## 🛠 Requerimientos Técnicos Obligatorios

### 📜 **"The Bit Masters Contract"**

Para que tu proyecto sea aprobado por la agencia, el código **DEBE** cumplir con:

### ✅ **1. Cero Código Global**
- ❌ Prohibido: Cálculos directos en eventos
- ✅ Obligatorio: Toda la lógica de cálculo debe vivir dentro de **funciones con return**

```javascript
// ❌ MAL - Código espagueti
button.addEventListener("click", function() {
    let total = precio * cantidad * 1.19;
    resultado.textContent = "$" + total;
});

// ✅ BIEN - Arquitectura de funciones
function calcularTotal(precio, cantidad) {
    return precio * cantidad * 1.19;
}

button.addEventListener("click", function() {
    let total = calcularTotal(precio, cantidad);
    resultado.textContent = formatearDinero(total);
});
```

---

### ✅ **2. Parámetros Claros**
Las funciones deben recibir **toda la información necesaria por parámetros**

- ❌ Prohibido: Leer el DOM dentro de funciones de cálculo
- ✅ Obligatorio: Funciones puras que solo usan lo que reciben

```javascript
// ❌ MAL - Función impura
function calcularPrecio() {
    let precio = document.querySelector("#precio").value;
    return precio * 1.19;
}

// ✅ BIEN - Función pura
function calcularPrecio(precio) {
    return precio * 1.19;
}
```

---

### ✅ **3. Interfaz Profesional**
El HTML y CSS deben estar **a la altura de un producto que un cliente pagaría por usar**

**Requisitos de diseño:**
- ✅ Diseño limpio y moderno
- ✅ Responsive (se ve bien en móvil)
- ✅ Colores coherentes con la marca del cliente
- ✅ Tipografía profesional (Google Fonts)
- ✅ Feedback visual (botones, animaciones sutiles)
- ✅ Sin errores de consola

**Prohibido:**
- ❌ Diseño genérico sin esfuerzo
- ❌ Colores chillones sin sentido
- ❌ Texto sin formato
- ❌ Inputs sin labels

---

## 📦 Entregables

Tu proyecto debe incluir **como mínimo:**

### 📁 **Estructura de Archivos:**
```
mi-proyecto/
├── index.html      (Estructura semántica)
├── style.css       (Diseño profesional)
├── script.js       (Arquitectura de funciones)
└── README.md       (Explicación del proyecto)
```

### 📄 **README.md del Proyecto:**
Tu README debe incluir:
- Nombre del proyecto
- Cliente elegido
- Descripción de las funcionalidades
- Funciones creadas (nombre y propósito)
- Tecnologías usadas
- Capturas de pantalla (opcional)

---

## 🎓 Criterios de Evaluación

Tu proyecto será evaluado bajo estos criterios:

| Criterio                      | Peso | Qué se evalúa                                                       |
| ----------------------------- | ---- | ------------------------------------------------------------------- |
| **Arquitectura de Funciones** | 40%  | Funciones puras, parámetros claros, separación de responsabilidades |
| **Funcionalidad Completa**    | 30%  | Todo lo especificado funciona sin errores                           |
| **Diseño Profesional**        | 20%  | UI/UX de calidad, responsive, atención al detalle                   |
| **Código Limpio**             | 10%  | Nombres descriptivos, comentarios útiles, sin código repetitivo     |

---

## 💡 Consejos del Tech Lead

> **"Elige el proyecto que más te apasione, no el que creas que es más fácil. La motivación te llevará más lejos que la comodidad."**

> **"Antes de escribir código, dibuja en papel qué funciones necesitas y qué hace cada una. 5 minutos de planificación te ahorrarán 1 hora de debugging."**

> **"Las funciones deben tener UN solo propósito. Si una función hace 3 cosas, son 3 funciones."**

> **"El diseño importa. Un código excelente con una interfaz fea no inspira confianza al cliente."**

> **"Prueba casos extremos: ¿Qué pasa si el usuario ingresa 0? ¿O números negativos? ¿O deja campos vacíos?"**

---

## 🏆 Bonus Challenges

Si quieres ir más allá y destacar:

### Nivel 1: Funcionalidad Extra
- Validación de todos los inputs
- Mensajes de error amigables
- Botón de "Limpiar" o "Reset"

### Nivel 2: Persistencia
- Guardar datos en `localStorage`
- Historial de cálculos realizados
- Exportar resultados

### Nivel 3: Innovación
- Dark mode / Light mode
- Múltiples idiomas
- Modo offline
- PWA (Progressive Web App)

---

## 🆘 Recursos de Apoyo

### Documentación:
- [MDN - Funciones en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [Google Fonts](https://fonts.google.com/)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)

### Inspiración de Diseño:
- [Dribbble](https://dribbble.com/tags/calculator)
- [Awwwards](https://www.awwwards.com/)

### Debugging:
- Usa `console.log()` dentro de tus funciones para ver qué valores reciben y retornan
- Revisa la consola del navegador (F12) para ver errores
- Prueba las funciones de forma aislada antes de integrarlas

---

## 🎯 ¿Por dónde empezar?

### Día 1: Planificación
1. Elige tu cliente
2. Dibuja un boceto de la interfaz
3. Lista todas las funciones que necesitas
4. Define qué parámetros recibe y qué retorna cada función

### Día 2-3: Estructura
1. Crea el HTML semántico
2. Aplica estilos base (colores, fuentes, layout)
3. Configura los inputs y botones

### Día 4-5: Funcionalidad
1. Crea las funciones de cálculo
2. Conecta los eventos con las funciones
3. Prueba casos extremos

### Día 6: Pulido
1. Mejora el diseño (animaciones, hover effects)
2. Agrega validaciones
3. Prueba en diferentes dispositivos

### Día 7: Entrega
1. Revisa que todo funcione
2. Limpia el código (elimina console.logs innecesarios)
3. Escribe el README
4. ¡Entrega con orgullo! 🚀

---

**¡Mucha suerte, developer! 💪**

**Recuerda:** No estás resolviendo un ejercicio de clase. Estás construyendo un producto para un cliente real. Piensa como un profesional, trabaja como un profesional. 🎯
