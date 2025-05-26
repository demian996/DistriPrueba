# Usa la imagen base de NGINX ligera
FROM nginx:alpine

# Elimina la configuración por defecto de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos del front-end al contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80 para acceder desde el navegador
EXPOSE 80

# Usa el comando por defecto de NGINX
CMD ["nginx", "-g", "daemon off;"]
