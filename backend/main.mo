import Array "mo:base/Array";
import Blob "mo:base/Blob";

actor {
  var image : Blob = Blob.fromArray([]);

  public func upload(image_blob : Blob) : async () {
    image := image_blob;
  };

  public func getImage() : async Blob {
    return image;
  };
}
