from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()
class ServiceRequest(Base):
     __tablename__ = 'service_requests'

     SRNumber = Column(String, primary_key=True)
     CreatedDate = Column(DateTime)
     UpdatedDate = Column(DateTime)
     ActionTaken = Column(String)
     Owner = Column(String)
     RequestType = Column(String)
     Status = Column(String)
     RequestSource = Column(String)
     MobileOS = Column(String)
     Anonymous = Column(String)
     AssignTo = Column(String)
     ServiceDate = Column(DateTime)
     ClosedDate = Column(DateTime)
     AddressVerified = Column(String)
     ApproximateAddress = Column(String)
     Address = Column(String)
     HouseNumber = Column(Integer)
     Direction = Column(String)
     StreetName = Column(String)
     Suffix = Column(String)
     ZipCode = Column(Integer)
     Lattitude = Column(Float)
     Longitude = Column(Float)
     Location = Column(String)
     TBMPage = Column(Integer)
     TBMColumn = Column(String)
     TBMRow = Column(Integer)
     APC = Column(String)
     CD = Column(Integer)
     CDMember = Column(String)
     NC = Column(Integer)
     NCName = Column(String)
     PolicePrecinct = Column(String)


     def __repr__(self):
        return "<ServiceRequest(SRNumber='%s', CreatedDate='%s', \
        UpdatedDate='%s', ActionTaken='%s', Owner='%s', RequestType='%s',\
        Status='%s', RequestSource='%s', MobileOS='%s', Anonymous='%s',\
        AssignTo='%s', ServiceDate='%s', ClosedDate='%s',\
        AddressVerified='%s', ApproximateAddress='%s', Address='%s',\
        HouseNumber='%s', Direction='%s', StreetName='%s',\
        Suffix='%s', ZipCode='%s', Lattitude='%s',\
        Longitude='%s', Location='%s', TBMPage='%s',\
        TBMColumn='%s', TBMRow='%s', APC='%s', CD='%s', CDMember='%s', NC='%s',
        NCName='%s', PolicePrecinct='%s',)>" % (self.name, self.fullname, self.nickname)
