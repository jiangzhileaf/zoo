package org.zoo.rest;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
@Component
public class PingRest {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/ping")
    public String ping() {
        return "PONG";
    }
}

