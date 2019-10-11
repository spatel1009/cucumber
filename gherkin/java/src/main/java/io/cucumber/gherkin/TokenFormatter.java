package io.cucumber.gherkin;

import java.util.stream.Collectors;

public class TokenFormatter {

    public String formatToken(Token token) {
        if (token.isEOF())
            return "EOF";

        return String.format("(%s:%s)%s:%s/%s/%s",
                toString(token.location.getLine()),
                toString(token.location.getColumn()),
                toString(token.matchedType),
                toString(token.matchedKeyword),
                toString(token.matchedText),
                toString(token.mathcedItems == null ? "" : token.mathcedItems.stream()
                        .map(o ->  o.column + ":" + o.text)
                        .collect(Collectors.joining(",")))
        );
    }

    private String toString(Object o) {
        return o == null ? "" : o.toString();
    }
}
