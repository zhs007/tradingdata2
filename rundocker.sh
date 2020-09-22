docker stop tradingdata2
docker rm tradingdata2
docker run -d -v $PWD/cfg:/app/tradingdata2/cfg --name tradingdata2 tradingdata2