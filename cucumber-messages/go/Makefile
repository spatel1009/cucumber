include default.mk

GOGO_PROTOBUF_VERSION=v1.3.0

.deps: messages.pb.go

.go-get:
	go get github.com/gogo/protobuf/protoc-gen-gogofaster@$(GOGO_PROTOBUF_VERSION)
	touch $@

messages.pb.go: messages.proto .go-get
	protoc \
		-I=. \
		-I=/usr/local/include \
		--gogofaster_out=Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types:. \
		$<

clean:
	rm -f .go-get
