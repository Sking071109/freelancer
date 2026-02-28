// ==========================================
// FUNCIONES PRINCIPALES (ARQUITECTURA REQUERIDA)
// ==========================================

/**
 * Calcula el costo base sin recargos
 * @param {number} horas - Horas estimadas del proyecto
 * @param {number} precioPorHora - Precio por hora en la moneda seleccionada
 * @returns {number} Costo base total
 */
function calcularCostoBase(horas, precioPorHora) {
    if (horas <= 0 || precioPorHora <= 0) {
        throw new Error('Las horas y el precio deben ser mayores a 0');
    }
    return horas * precioPorHora;
}

/**
 * Aplica recargo según el nivel de urgencia
 * @param {number} costoBase - Costo base del proyecto
 * @param {string} urgencia - Nivel de urgencia: 'normal', 'urgente', 'express'
 * @returns {number} Recargo aplicado
 */
function aplicarRecargoUrgencia(costoBase, urgencia) {
    const recargas = {
        'normal': 0.00,
        'urgente': 0.15,
        'express': 0.30
    };

    const porcentaje = recargas[urgencia] || 0;
    return costoBase * porcentaje;
}

/**
 * Formatea el presupuesto final con símbolo de moneda
 * @param {number} costoFinal - Costo final a formatear
 * @param {string} moneda - Código de moneda: 'COP', 'USD', 'EUR'
 * @returns {string} Presupuesto formateado profesionalmente
 */
function formatearPresupuesto(costoFinal, moneda = 'COP') {
    const simbolos = {
        'ARS': '$',
        'USD': '$',
        'EUR': '€'
    };

    const simbolo = simbolos[moneda] || '$';
    const decimales = moneda === 'ARS' ? 0 : 2;
    const formateado = costoFinal.toLocaleString('es-CO', {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales
    });

    return `${simbolo} ${formateado}`;
}

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

/**
 * Genera un presupuesto completo con desglose
 */
function generarPresupuestoCompleto(horas, precioPorHora, urgencia, moneda) {
    const costoBase = calcularCostoBase(horas, precioPorHora);
    const recargoUrgencia = aplicarRecargoUrgencia(costoBase, urgencia);
    const subtotal = costoBase + recargoUrgencia;
    const iva = subtotal * 0.19;
    const totalCobrar = subtotal + iva;
    const gananciaNeta = subtotal; // Ganancia antes de IVA (lo que realmente recibe)

    return {
        costoBase,
        recargoUrgencia,
        subtotal,
        iva,
        totalCobrar,
        gananciaNeta,
        horas,
        precioPorHora,
        urgencia,
        moneda,
        fecha: new Date().toLocaleString('es-CO')
    };
}

/**
 * Obtiene la descripción de urgencia en formato legible
 */
function obtenerDescripcionUrgencia(urgencia) {
    const descripciones = {
        'normal': 'Normal',
        'urgente': 'Urgente (+15%)',
        'express': 'Express (+30%)'
    };
    return descripciones[urgencia] || urgencia;
}

// ==========================================
// GESTIÓN DEL DOM Y EVENTOS
// ==========================================

const formulario = document.getElementById('cotizadorForm');
const resultadoSection = document.getElementById('resultadoSection');
const historialContainer = document.getElementById('historialContainer');
const btnLimpiarHistorial = document.getElementById('btnLimpiarHistorial');
const btnExportar = document.getElementById('btnExportar');
const btnGuardar = document.getElementById('btnGuardar');

let presupuestoActual = null;
let historial = cargarHistorial();

// Evento del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const horas = parseFloat(document.getElementById('horas').value);
    const precioPorHora = parseFloat(document.getElementById('precioPorHora').value);
    const urgencia = document.getElementById('urgencia').value;
    const moneda = document.getElementById('moneda').value;

    try {
        presupuestoActual = generarPresupuestoCompleto(horas, precioPorHora, urgencia, moneda);
        mostrarResultado(presupuestoActual);
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

/**
 * Muestra el resultado en la interfaz
 */
function mostrarResultado(presupuesto) {
    document.getElementById('costoBase').textContent = formatearPresupuesto(presupuesto.costoBase, presupuesto.moneda);
    document.getElementById('recargoUrgencia').textContent = formatearPresupuesto(presupuesto.recargoUrgencia, presupuesto.moneda);
    document.getElementById('subtotal').textContent = formatearPresupuesto(presupuesto.subtotal, presupuesto.moneda);
    document.getElementById('iva').textContent = formatearPresupuesto(presupuesto.iva, presupuesto.moneda);
    document.getElementById('totalCobrar').textContent = formatearPresupuesto(presupuesto.totalCobrar, presupuesto.moneda);
    document.getElementById('gananciaNeta').textContent = formatearPresupuesto(presupuesto.gananciaNeta, presupuesto.moneda);
    
    resultadoSection.style.display = 'block';
    resultadoSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Guarda la cotización en el historial
 */
btnGuardar.addEventListener('click', function() {
    if (presupuestoActual) {
        historial.unshift(presupuestoActual);
        localStorage.setItem('freelanceHelperHistorial', JSON.stringify(historial));
        actualizarVisualHistorial();
        alert('✅ Cotización guardada en el historial');
    }
});

/**
 * Exporta el presupuesto como texto
 */
btnExportar.addEventListener('click', function() {
    if (presupuestoActual) {
        const textoExportacion = generarTextoExportacion(presupuestoActual);
        descargarComoTexto(textoExportacion);
    }
});

/**
 * Genera texto formateado para exporta
 */
function generarTextoExportacion(presupuesto) {
    const linea = '='.repeat(50);
    const texto = `
${linea}
           PRESUPUESTO FREELANCE HELPER
${linea}

DETALLES DEL PROYECTO:
  • Horas estimadas: ${presupuesto.horas} h
  • Precio por hora: ${formatearPresupuesto(presupuesto.precioPorHora, presupuesto.moneda)}
  • Nivel de urgencia: ${obtenerDescripcionUrgencia(presupuesto.urgencia)}
  • Moneda: ${presupuesto.moneda}
  • Fecha de generación: ${presupuesto.fecha}

DESGLOSE DE COSTOS:
  Costo base..................... ${formatearPresupuesto(presupuesto.costoBase, presupuesto.moneda)}
  Recargo por urgencia........... ${formatearPresupuesto(presupuesto.recargoUrgencia, presupuesto.moneda)}
  Subtotal....................... ${formatearPresupuesto(presupuesto.subtotal, presupuesto.moneda)}
  IVA (19%)...................... ${formatearPresupuesto(presupuesto.iva, presupuesto.moneda)}

${linea}
  TOTAL A COBRAR................ ${formatearPresupuesto(presupuesto.totalCobrar, presupuesto.moneda)}
  Ganancia Neta (antes IVA)...... ${formatearPresupuesto(presupuesto.gananciaNeta, presupuesto.moneda)}
${linea}

Generado por: Freelance Helper
Para: Comunidad de Diseñadores Gráficos Independientes
The Bit Masters © 2026
    `;
    return texto.trim();
}

/**
 * Descarga el texto como archivo
 */
function descargarComoTexto(contenido) {
    const elemento = document.createElement('a');
    elemento.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    elemento.setAttribute('download', `presupuesto_${new Date().getTime()}.txt`);
    elemento.style.display = 'none';
    document.body.appendChild(elemento);
    elemento.click();
    document.body.removeChild(elemento);
    alert('📥 Presupuesto exportado correctamente');
}

/**
 * Carga el historial del localStorage
 */
function cargarHistorial() {
    const historialGuardado = localStorage.getItem('freelanceHelperHistorial');
    return historialGuardado ? JSON.parse(historialGuardado) : [];
}

/**
 * Actualiza la visualización del historial
 */
function actualizarVisualHistorial() {
    historialContainer.innerHTML = '';
    
    if (historial.length === 0) {
        historialContainer.innerHTML = '<p class="empty-message">No hay cotizaciones guardadas aún</p>';
        btnLimpiarHistorial.style.display = 'none';
        return;
    }

    btnLimpiarHistorial.style.display = 'block';

    historial.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'historial-item';
        card.innerHTML = `
            <h4>Cotización #${index + 1}</h4>
            <p><strong>${item.horas}h</strong> × ${formatearPresupuesto(item.precioPorHora, item.moneda)}</p>
            <p>Urgencia: ${obtenerDescripcionUrgencia(item.urgencia)}</p>
            <p style="font-size: 0.85em; color: #999;">${item.fecha}</p>
            <div class="monto">${formatearPresupuesto(item.totalCobrar, item.moneda)}</div>
            <button onclick="eliminarDelHistorial(${index})" style="margin-top: 10px; width: 100%; padding: 8px; background: #fee; border: 1px solid #fcc; border-radius: 4px; cursor: pointer; color: #c33;">
                Eliminar
            </button>
        `;
        historialContainer.appendChild(card);
    });
}

/**
 * Elimina un item del historial
 */
function eliminarDelHistorial(index) {
    if (confirm('¿Eliminar esta cotización?')) {
        historial.splice(index, 1);
        localStorage.setItem('freelanceHelperHistorial', JSON.stringify(historial));
        actualizarVisualHistorial();
    }
}

/**
 * Limpia todo el historial
 */
btnLimpiarHistorial.addEventListener('click', function() {
    if (confirm('¿Estás seguro? Esto eliminará TODAS las cotizaciones guardadas.')) {
        historial = [];
        localStorage.removeItem('freelanceHelperHistorial');
        actualizarVisualHistorial();
        alert('🗑️ Historial eliminado correctamente');
    }
});

// Inicializar visualización del historial
actualizarVisualHistorial();
