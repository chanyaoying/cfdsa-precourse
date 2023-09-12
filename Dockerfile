FROM oven/bun
WORKDIR /app
COPY . /app
RUN bun install
COPY workshop01/ ./workshop01/
EXPOSE 3000
CMD ["bun", "start"]