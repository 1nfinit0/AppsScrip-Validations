# Automatización de Validación y Envío de Correos Electrónicos con Apps Script

Este proyecto implementa un sistema automatizado de validación y notificación para gestionar un historial crediticio utilizando Google Apps Script. El script está enlazado a una hoja de cálculo de Google, donde se registran datos automáticamente. A partir de estos datos, el sistema realiza las siguientes acciones:

- **Validaciones automáticas**: Verifica la validez de DNI, correo electrónico, historial crediticio, y estado laboral.
- **Envío automático de correos electrónicos**: Si todas las validaciones son exitosas, se envía un correo electrónico al cliente, notificándole que ha sido aprobado para un crédito.
- **Configuración simple**: Todo el proceso está automatizado y fácil de configurar dentro de un entorno de Google Workspace.

## Funcionalidades

- Validación de datos de cliente en tiempo real.
- Automatización del envío de correos electrónicos en función de la aprobación del crédito.
- Fácil integración con hojas de cálculo de Google y formularios.
- Notificaciones automáticas a clientes elegibles.

## Uso

Este proyecto es ideal para automatizar procesos de validación y notificación en entornos donde se manejan grandes volúmenes de datos de clientes, como instituciones financieras, oficinas de crédito o cualquier sistema de aprobación similar.

## Servicios Requeridos

Es importante para el buen funcionamiento de la aplicación usar los siguientes servicios:

- **Sheets**: Servicio que permite manipular información de las hojas de cálculo.
- **Gmail**: Servicio que permite enviar correos electrónicos entre otras funcionalidades.
